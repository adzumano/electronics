from django.db import models

# Create your models here.
class Employees(models.Model):
    DEPARTMENT_CHOISES = (
        ("en","en"),
        ("kz","kz"),
        ("ru","ru"),
    )
    POSITION_CHOISES = (
        ("Teacher","Teacher"),
        ("Student","Student"),
    )
    GENDER_CHOISES = (
        ("Male","Male"),
        ("Female","Female"),
    )
    ADVISOR_CHOISES = (
        ("Assem Talasbek","Assem Talasbek"),
        ("Nazim Ibragim","Nazim Ibragim"),
    )
    id = models.AutoField(primary_key=True)
    photo = models.ImageField(blank=True,null=True)
    name = models.CharField(max_length=30,null=True)
    surname = models.CharField(max_length=30,null=True)
    department = models.CharField(max_length=30, choices=DEPARTMENT_CHOISES,default="en", null=True)
    position = models.CharField(max_length=30,choices=POSITION_CHOISES,null=True)
    student_id = models.CharField(max_length=30,blank=True,unique=True,null=False)
    gender = models.CharField(max_length=30,null=True,choices=GENDER_CHOISES)
    email = models.EmailField(max_length=254,null=True)
    advisor = models.CharField(max_length=30,null=True)
    check_in = models.DateTimeField(auto_now_add=True, null=True)
    check_out = models.DateTimeField(auto_now=True, null=True)
    def __str__(self):
        return self.name

class Devices(models.Model):
    id = models.AutoField(primary_key=True)
    serial_number = models.CharField(max_length=30,null=True)
    device_ip = models.CharField(max_length=30,null=True)
    device_model = models.CharField(max_length=30,null=True)
    check_out = models.DateTimeField(auto_now=True, null=True)
    def __str__(self):
        return self.device_model