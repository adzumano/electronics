# Generated by Django 3.0.4 on 2020-04-12 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20200308_1930'),
    ]

    operations = [
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, null=True)),
                ('surname', models.CharField(max_length=30, null=True)),
                ('status', models.CharField(choices=[('Teacher', 'Teacher'), ('Student', 'Student')], max_length=30, null=True)),
                ('student_id', models.CharField(blank=True, max_length=30, unique=True)),
                ('date_created', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Employees',
        ),
    ]