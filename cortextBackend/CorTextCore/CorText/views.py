from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout
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

        if CustomUser.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=400)
        
        if not email or not password:
            return JsonResponse({'error': 'Email and password are required'}, status=400)
        
        if len(password) < 8:
            return JsonResponse({'error': 'Password must be at least 8 characters long'}, status=400)
        
        if not any(char.isupper() for char in password):
            return JsonResponse({'error': 'Password must contain at least one uppercase letter'}, status=400)
        
        if not any(char.islower() for char in password):
            return JsonResponse({'error': 'Password must contain at least one lowercase letter'}, status=400)
        
        if not any(char.isdigit() for char in password):
            return JsonResponse({'error': 'Password must contain at least one number'}, status=400)

        user = CustomUser.objects.create_user(
            email=email,
            password=password
        )
        return JsonResponse({'message': 'User created successfully'})

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
            return JsonResponse({'error': 'Email not found'}, status=404)

        if check_password(password, user.password):
            # Detect magic email flow
            if user.email == 'magic@cortext.ai':
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

    try:
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        try:
            user = CustomUser.objects.get(username=username)
        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'Admin user not found'}, status=404)

        if check_password(password, user.password):
            login(request, user)
            return JsonResponse({'message': 'Admin fully authenticated'})
        else:
            return JsonResponse({'error': 'Invalid admin credentials'}, status=403)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@login_required
def check_auth(request):
    return JsonResponse({'authenticated': True})


@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out'})
