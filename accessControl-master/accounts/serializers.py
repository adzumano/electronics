from rest_framework import serializers
from accounts.models import Employees, Devices


#Employees Serializer
class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'

class EmployeesDetailSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Employees
        fields = '__all__'


class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ['id','student_id','name','surname','department','position','check_in','check_out']


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devices
        fields = '__all__'

class DeviceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devices
        fields = '__all__'

