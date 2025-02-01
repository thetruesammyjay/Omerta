from django.urls import path
from . import views

urlpatterns = [
    path('messages/', views.MessageList.as_view(), name='message-list'),
    path('messages/<int:pk>/', views.MessageDetails.as_view(), name='message-detail'),
]