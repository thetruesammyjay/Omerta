from rest_framework import serializers
from .models import AnalyticsData
from users.serializers import UserSerializer

class AnalyticsDataSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True) # Nested serializer for the user

    class Meta:
        model = AnalyticsData
        field = ['id', 'user', 'event_type', 'event_data', 'timestamp']