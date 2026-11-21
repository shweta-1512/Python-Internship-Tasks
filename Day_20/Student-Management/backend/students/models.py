from django.db import models
class Student(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    course = models.CharField(max_length=120)
    age = models.PositiveIntegerField()
    def __str__(self): return self.name
