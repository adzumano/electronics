from django.contrib import admin

# Register your models here.
from .models import Employees, Devices


admin.site.register(Employees)

admin.site.register(Devices)
