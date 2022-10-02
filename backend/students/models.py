from django.db import models
from authentication.models import User

# Create your models here.


class Student(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    grade = models.IntegerField()
    school = models.CharField(max_length=255)