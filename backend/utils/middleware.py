from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse

class CustomExceptionMiddleware(MiddlewareMixin):
    def process_exception(self, request, exception):
        # Log the error
        log_error(exception)

        # Return a JSON response
        return JsonResponse({
            "status_code": 500,
            "message": "Interval Server Error",
            "data": None,
        }, status=500)

class RequestLoggingMiddleware(MiddlewareMixin):
    def process_request(self, request):
        # Log request details
        with open("request_log.txt", "a") as f:
            f.write(f"{request.method} {request.path} {request.GET}\n")