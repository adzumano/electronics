from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from rest_framework import viewsets, permissions
from .serializers import EmployeesSerializer, EmployeesDetailSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticated
#Employees Viewset

class EmployeesCreateViewSet(generics.CreateAPIView):
    serializer_class = EmployeesSerializer

class EmployeesListViewSet(generics.ListAPIView):
    serializer_class = EmployeesDetailSerializer
    queryset = Employees.objects.all()
    # permission_classes = (IsAuthenticated, )

class EmployeesDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EmployeesDetailSerializer
    queryset = Employees.objects.all()
    # permission_classes = (IsOwnerOrReadOnly, )