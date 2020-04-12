from django.db import models

# Create your models here.
class Employees(models.Model):
    id = models.AutoField(primary_key=True)
    photo = models.ImageField(blank=True,null=True)
    name = models.CharField(max_length=30,null=True)
    surname = models.CharField(max_length=30,null=True)
    student_id = models.CharField(max_length=30,blank=True,unique=True,null=False)
    check_in = models.DateTimeField(auto_now_add=True, null=True)
    check_out = models.DateTimeField(auto_now=True, null=True)
    def __str__(self):
        return self.name