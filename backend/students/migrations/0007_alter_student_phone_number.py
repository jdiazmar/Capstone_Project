# Generated by Django 4.0.4 on 2022-10-21 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0006_alter_student_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='phone_number',
            field=models.CharField(max_length=9999999999),
        ),
    ]
