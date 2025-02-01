from django.contrib import admin
from django.urls import path, include

urlspatterns = [
    path('admin/', admin.site.urls),
    path('api/chat/', include('chat.urls')),
]

urlspatterns = [
    path('admin/', admin.site.urls),
    path('api/analytics/', include ('analytics.urls')),
]

urlspatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include ('users.urls')),
]