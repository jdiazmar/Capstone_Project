from urllib import response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Student
from .serializers import StudentSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all_students(request):
    if request.method =='POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        students = Student.objects.filter(user_id=request.user.id)
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)
