from django.shortcuts import get_object_or_404
from rest_framework import generics

from .models import Room, Message
from .serializers import RoomSerializer, MessageSerializer

# Create your views here.

class RoomListAPIView(generics.ListCreateAPIView): #GET & POST
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomDetailAPIView(generics.RetrieveUpdateDestroyAPIView): #PUT & DETLETE & RETRIEVE
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class MessageListAPIView(generics.ListCreateAPIView): #GET & POST
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    # def get_queryset(self):
    #     room_id = self.kwargs['room']
    #     return Message.objects.filter(room=room_id)

    # def perform_create(self, serializer):
    #     room_instance = get_object_or_404(Room, id=self.kwargs['room'])
    #     serializer.save(room = room_instance)

class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView): #PUT & DETLETE & RETRIEVE
    queryset = Message.objects.all()
    serializer_class = MessageSerializer