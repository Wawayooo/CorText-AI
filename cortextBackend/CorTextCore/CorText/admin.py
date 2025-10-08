from django.contrib import admin
from .models import CustomUser, ManualAdmin

admin.site.register(ManualAdmin)
admin.site.register(CustomUser)

