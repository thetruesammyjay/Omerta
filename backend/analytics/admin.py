from django.contrib import admin
from .models import AnalyticsData

@admin.register(AnalyticsData)
class AnalyticsDataAdmin(admin.ModelAdmin):
    list_display = ('user', 'event_type', 'timestamp')
    search_fields = ('user__username', 'event_type')
    list_filter = ('timestamp')