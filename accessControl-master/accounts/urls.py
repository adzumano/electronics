from django.urls import path
from . import views


urlpatterns = [
    # path('',views.EmployeesViewSet.home,name='home'),
    path('account/create/',views.EmployeesCreateViewSet.as_view()),
    path('list/',views.EmployeesListViewSet.as_view()),
    path('account/detail/<int:pk>/',views.EmployeesDetailViewSet.as_view())
]


