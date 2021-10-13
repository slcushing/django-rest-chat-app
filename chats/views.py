from rest_framework import generics

from .models import Room
from .serializers import RoomSerializer

# Create your views here.

class RoomListAPIView(generics.ListCreateAPIView): #GET & POST
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


# class MessageListAPIView(generics.ListCreateAPIView): #GET & POST
