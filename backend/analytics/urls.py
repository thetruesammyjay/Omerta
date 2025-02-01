from django.urls import path
from . import views

urlpatterns = [
    path('analytics/', views.Analytics.as_view(), name='analytics-list'),
    path('analytics/<int:pk>/', views.AnalyticsDataDetails.as_view(), name='analytics-details'),
]