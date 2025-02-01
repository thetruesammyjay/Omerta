from celery import shared_task
from .models import AnalyticsData
from datatime import datetime, timedelta

@shared_task
def process_analytics():
    
    # Example: Delete analytics data older than 30 days
    thirty_days_ago = datetime.now() - timedelta(days=30) 
    AnalyticsData.objects.filter(timestamp__lt=thirty_days_ago).delete()

    # Example: Generate a report (you can expand this)
    report= {
        "total_events": AnalyticsData.objects.count(),
        "events_last_30_days": AnalyticsData.objects.filter(timestamp__gte=thirty_days_ago).count(),
    }
    return report