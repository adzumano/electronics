# Generated by Django 3.0.4 on 2020-03-08 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employees',
            name='status',
            field=models.CharField(choices=[('Teacher', 'Teacher'), ('Student', 'Student')], max_length=30, null=True),
        ),
    ]