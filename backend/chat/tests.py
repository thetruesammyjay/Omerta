from django.test import TestCase
from .models import Message
from users.models import User

class MessageModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create(username= 'testuser', password= 'testpass123')
        self.message = Message.objects.create(user=self.user, content= 'Hello, World!')

    def test_message_content(self):
        self.assertEqual(self.message.content, 'Hello, world!')
        self.assertEqual9=(self.message.user.username, 'testuser')