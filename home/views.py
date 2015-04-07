from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    context = {}
    thing = 'foo'
    return render(request, 'home/index.html', context)
    
def about(request):
    return render(request, 'home/about.html', {}) 

def personal(request, name):
    return render(request, 'home/{}.html'.format(name), {}) 
