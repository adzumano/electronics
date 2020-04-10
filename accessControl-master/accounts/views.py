from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from rest_framework import viewsets, permissions
from .serializers import EmployeesSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

#Employees Viewset

class EmployeesViewSet(APIView):
    def get(self, request):
        employees = Employees.objects.all()
        serializer = EmployeesSerializer(employees,many=True)
        return Response(serializer.data)

    def post(self):
        pass
    
    def put(self):
        pass

    def delete(self):
        pass
    
    def home(request):
        employees = Employees.objects.all()
        total_employees = employees.count()
        teachers = employees.filter(status='Teacher').count()
        students = employees.filter(status='Student').count()
        context = {'employees':employees,'total_employees':total_employees,'teachers':teachers,'students':students}
        return render(request, 'accounts/dashboard.html',context)