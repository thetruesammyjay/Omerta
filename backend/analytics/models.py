from django.db import models
from users.model import User

class AnalyticsData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    event_type = models.CharField(max_length=100) # e.g., 'chat_message', 'login'
    event_data = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__ (self):
        return f"{self.event_type} by {self.user.username if self.user else 'Anonymous'} at {self.timestamp}"