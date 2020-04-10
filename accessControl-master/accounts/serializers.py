from rest_framework import serializers
from accounts.models import Employees


#Employees Serializer

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'