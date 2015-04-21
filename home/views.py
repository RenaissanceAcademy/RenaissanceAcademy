from django.shortcuts import render
from django.http import HttpResponse
from .models import Student

# Create your views here.
def index(request):
    students = Student.objects.order_by('-lname')
    context = {'students': students }
    return render(request, 'home/index.html', context)
    
def about(request):
    context = {}
    return render(request, 'home/about.html', context)

def personal(request, studentId):
    student = Student.objects.get(pk=studentId)
    context = { 'student': student }
    return render(request, 'home/personal.html', context)