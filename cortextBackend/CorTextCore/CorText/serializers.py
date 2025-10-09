# serializers.py
from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'first_name', 'last_name', 'age', 'gender',
            'address', 'profile_image', 'email', 'is_admin', 'is_admin_magic'
        ]
