from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout, authenticate

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

from django.contrib.auth.hashers import check_password
from .models import CustomUser, ManualAdmin
import json

@csrf_exempt
def signup_view(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    try:
        email = request.POST.get('email', default=None)
        password = request.POST.get('password', default=None)
        first_name = request.POST.get('first_name', default=None)
        last_name = request.POST.get('last_name', default=None)
        age = request.POST.get('age', default=18)
        gender = request.POST.get('gender', default=None)
        address = request.POST.get('address', default=None)
        profile_image = request.FILES.get('profile_image', default=None)

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

        user = CustomUser.objects.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            age=age,
            gender=gender,
            address=address
        )

        if profile_image:
            user.profile_image = profile_image
            user.save()

        return JsonResponse({'message': 'User created successfully'})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def login_view(request):
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

        # 🔐 Check for admin redirect condition
        if email == 'cortextai@admin.com' and user.is_admin:
            return JsonResponse({'step': 'admin_auth_required'})

        if check_password(password, user.password):
            login(request, user)
            return JsonResponse({'message': 'User logged in'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=403)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
def admin_login_view(request):
    """
    Admin login using ManualAdmin username + password.
    """
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    try:
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        try:
            admin = ManualAdmin.objects.get(username=username)
        except ManualAdmin.DoesNotExist:
            return JsonResponse({'error': 'Admin not found'}, status=404)

        if admin.password == password:
            return JsonResponse({'message': 'Admin authenticated'})
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
