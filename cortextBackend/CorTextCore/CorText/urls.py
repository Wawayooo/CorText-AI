from django.urls import path
from . import views

urlpatterns = [
    path('api/signup/', views.signup_view),
    path('api/login/', views.login_view),
    path('api/check-auth/', views.check_auth),
    path('api/logout/', views.logout_view),
    path('api/admin-login/', views.admin_login_view),
]
