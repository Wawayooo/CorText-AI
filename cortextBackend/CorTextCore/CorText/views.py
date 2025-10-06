from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.hashers import check_password
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from CorText.models import CustomUser  # Replace with your actual app name
import json

@csrf_exempt
def signup_view(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return JsonResponse({'error': 'Email and password are required'}, status=400)

        if CustomUser.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=400)

        # Password validation
        if len(password) < 8:
            return JsonResponse({'error': 'Password must be at least 8 characters long'}, status=400)
        if not any(char.isupper() for char in password):
            return JsonResponse({'error': 'Password must contain at least one uppercase letter'}, status=400)
        if not any(char.islower() for char in password):
            return JsonResponse({'error': 'Password must contain at least one lowercase letter'}, status=400)
        if not any(char.isdigit() for char in password):
            return JsonResponse({'error': 'Password must contain at least one number'}, status=400)

        # Generate unique username from email
        base_username = email.split('@')[0]
        username = base_username
        counter = 1
        while CustomUser.objects.filter(username=username).exists():
            username = f"{base_username}{counter}"
            counter += 1

        user = CustomUser.objects.create_user(
            email=email,
            password=password,
            username=username
        )

        return JsonResponse({'message': 'User created successfully', 'username': username})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
def login_view(request):
    """
    Step 1: Regular login using email + password.
    If magic email is used, return signal to redirect to admin login.
    """
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'Email not found or Unknown Email'}, status=404)

        if check_password(password, user.password):
            if user.is_admin_magic:
                request.session['magic_verified'] = True
                return JsonResponse({'step': 'admin_auth_required'})
            else:
                login(request, user)
                return JsonResponse({'message': 'User logged in'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=403)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
def admin_login_view(request):
    """
    Step 2: Admin login using username + password.
    Only accessible after magic email login.
    """
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    if not request.session.get('magic_verified'):
        return JsonResponse({'error': 'Magic login required'}, status=403)

    try:
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'error': 'Username and password are required'}, status=400)

        user = authenticate(request, username=username, password=password)

        if user is None or not user.is_admin:
            return JsonResponse({'error': 'Invalid admin credentials'}, status=403)

        login(request, user)
        del request.session['magic_verified']
        return JsonResponse({'message': 'Admin fully authenticated'})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@login_required
def check_auth(request):
    return JsonResponse({'authenticated': True})

@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out'})
