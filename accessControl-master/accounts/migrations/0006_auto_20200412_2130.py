# Generated by Django 3.0.4 on 2020-04-12 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20200412_2124'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employees',
            old_name='date_created',
            new_name='check_in',
        ),
        migrations.RemoveField(
            model_name='employees',
            name='status',
        ),
        migrations.AddField(
            model_name='employees',
            name='check_out',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='employees',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='assets'),
        ),
        migrations.AlterField(
            model_name='employees',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
