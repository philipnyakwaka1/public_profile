from django.shortcuts import render
from django.http import HttpResponse, HttpRequest

# Create your views here.

def profile_view(request: HttpRequest) -> HttpResponse:
    """This function handles GET requests to my profile"""
    return render(request, 'myPortfolio/portfolio.html')
