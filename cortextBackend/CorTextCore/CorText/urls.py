from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/signup/', views.signup_view),
    path('api/login/', views.login_view),
    path('api/check-auth/', views.check_auth),
    path('api/logout/', views.logout_view),
    path('api/admin-login/', views.admin_login_view),
    
    path('api/profile/', views.get_user_profile),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
