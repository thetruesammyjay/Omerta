from functools import wraps
from django.http import JsonResponse

def require_authentication(view_func):
    @wrap(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return JsonResponse({
                "status_code": 401,
                "message": "Unauthorized",
                "data": None,
            }, status=401)
        return view_func(request, *args, **kwargs)
    return _wrapped_view

def validate_request_data(required_fields):
    def decorator(view_func):
        @wrap(view_func)
        def _wrapped_view(request, *args, **kwargs):
            data = request.POST if request.method == "POST" else request.GET
            missing_fields = [field for field in required_fields if field not in data]
            if missing_fields:
                return JsonResponse({
                    "status_code": 400,
                    "message": f"Missing required fields: {', '.join(missing_fields)}",
                    "data": None,
                }, status=400)
            return view_func(request, *args, **kwargs)
        return _wrapped_view
    return decorator