from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from rest_framework import viewsets, permissions
from .serializers import EmployeesSerializer, EmployeesDetailSerializer, DeviceSerializer, PersonalSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, filters
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticated
from .pagination import PostLimitOffsetPagination, PostPageNumberPagination
#Employees Viewset

class EmployeesCreateViewSet(generics.CreateAPIView):
    serializer_class = EmployeesSerializer

class EmployeesListViewSet(generics.ListAPIView):
    # search_fields = ['name','surname','student_id']
    # filter_backends = (filters.SearchFilter, )
    # pagination_class = PostPageNumberPagination
    serializer_class = EmployeesDetailSerializer
    queryset = Employees.objects.all()
    # permission_classes = (IsAuthenticated, )

class EmployeesDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EmployeesDetailSerializer
    queryset = Employees.objects.all()
    # permission_classes = (IsOwnerOrReadOnly, )

class PersonalViewSet(generics.ListAPIView):
    # search_fields = ['name','surname','student_id']
    # filter_backends = (filters.SearchFilter, )
    # pagination_class = PostPageNumberPagination
    serializer_class = PersonalSerializer
    queryset = Employees.objects.all()

class DeviceViewSet(generics.ListAPIView):
    # search_fields = ['device_model','serial_number','device_ip']
    # filter_backends = (filters.SearchFilter, )
    # pagination_class = PostPageNumberPagination
    serializer_class = DeviceSerializer
    queryset = Devices.objects.all()

class DeviceCreateViewSet(generics.CreateAPIView):
    serializer_class = DeviceSerializer

class DeviceDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DeviceSerializer
    queryset = Devices.objects.all()