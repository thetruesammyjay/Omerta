from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import User

class UserModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username= 'testuser'
            email='test@example.com'
            password='testpass123'
        )

    def test_user_creation(self):
        self.assertEqual(self.user.username,'testuser')
        self.assertEqual(self.user.email,'test@example.com')
        self.assertTrue(self.user.check_password('testpass123'))