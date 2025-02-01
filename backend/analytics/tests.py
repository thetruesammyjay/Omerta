from django.test import TestCase
from .models import AnalyticsData
from users.model import User

class AnalyticsDataModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create(username='testuser', password='testpass123')
        self.event = AnalyticsData.objects.create(
            user=self.user,
            event_type='chat_message',
            event_data={'message': 'Hello, world!'}
        )

    def test_event_content(self):
        self.assertEqual(self.event.event_type, 'chat_message')
        self.assertEqual(self.event.event_data, {'message': 'Hello, world!'})
        self.assertEqual(self.event.user.username, 'testuser')