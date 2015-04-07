from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    context = {}
    thing = 'foo'
    return render(request, 'home/index.html', context)
    
def about(request):
    return HttpResponse("Hello world, this is the about page.")

def personal(request, name):
	return HttpResponse("Looking for student id " + name)