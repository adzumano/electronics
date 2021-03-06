# Generated by Django 3.0.4 on 2020-04-15 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_auto_20200415_2041'),
    ]

    operations = [
        migrations.CreateModel(
            name='Devices',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('serial_number', models.CharField(max_length=30, null=True)),
                ('device_ip', models.CharField(max_length=30, null=True)),
                ('device_model', models.CharField(max_length=30, null=True)),
                ('check_out', models.DateTimeField(auto_now=True, null=True)),
            ],
        ),
    ]
