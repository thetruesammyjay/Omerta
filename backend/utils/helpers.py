import json
from datetime import datetime

def json_serializer(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Type {type(obj)} not serializable")

def format_response(data, status_code=200, message="Success"):

    return {
        "status_code": status_code,
        "message": message,
        "data": data,
    }

def log_error(error):
    with open("error_log.txt", "a") as f:
        f.write(f"{datetime.now()}: {str(error)\n}")