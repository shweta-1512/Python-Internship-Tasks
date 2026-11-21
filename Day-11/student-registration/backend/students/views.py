from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema

from .models import Student
from .serializers import StudentSerializer


@extend_schema(
    methods=['GET'],
    responses=StudentSerializer(many=True)
)
@extend_schema(
    methods=['POST'],
    request=StudentSerializer,
    responses={201: StudentSerializer, 400: dict}
)
@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    serializer = StudentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema(
    methods=['GET'],
    responses=StudentSerializer
)
@extend_schema(
    methods=['PUT', 'PATCH'],
    request=StudentSerializer,
    responses={200: StudentSerializer, 400: dict}
)
@extend_schema(
    methods=['DELETE'],
    responses={204: None}
)
@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def student_detail(request, pk):
    student = get_object_or_404(Student, pk=pk)

    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data)

    if request.method in ['PUT', 'PATCH']:
        serializer = StudentSerializer(
            student,
            data=request.data,
            partial=(request.method == 'PATCH')
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    student.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@extend_schema(
    responses={200: dict}
)
@api_view(['GET'])
def hello_world(request):
    return Response({
        "message": "Hello World! Django REST Framework is Working."
    })