# Generated by Django 3.0.4 on 2020-04-12 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20200413_0038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employees',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='assets'),
        ),
    ]
