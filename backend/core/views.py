from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

# Create your views here.


@require_http_methods(["GET"])
def hello_world(request):
    return JsonResponse({"message": "Hello from Django!"})


def index(request):
    return HttpResponse("Welcome to QuantumEye!")
