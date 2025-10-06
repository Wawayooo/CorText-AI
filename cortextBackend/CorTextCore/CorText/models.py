from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    is_admin = models.BooleanField(default=False)
    is_admin_magic = models.BooleanField(default=False)
    
    def __str__(self):
        return self.email
