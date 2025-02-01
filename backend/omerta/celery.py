import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'omerta.settings')

app = Celery('omerta')
app.config_from_object('django.conf:settings', namespace='CELERY')

# Periodic tasks
app.conf.beat_schedule = {
    'process-analytics-every-hour': {
        'task': 'analytics.tasks.process_analytics',
        'schedule': crontab(minute=0, hour='*/1'),
    },
}

app.autodiscover_tasks()