from django.urls import path
from . import views

urlpatterns = [
    # path('',views.EmployeesViewSet.home,name='home'),
    path('api/v1/',views.EmployeesViewSet.as_view())
]