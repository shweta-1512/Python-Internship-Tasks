from rest_framework.viewsets import ModelViewSet
from .models import Student
from .serializers import StudentSerializer
class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer
