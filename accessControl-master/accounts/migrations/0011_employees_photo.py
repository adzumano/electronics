# Generated by Django 3.0.4 on 2020-04-12 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_remove_employees_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='employees',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]