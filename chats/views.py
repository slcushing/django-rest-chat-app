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
    serializer_class: MessageSerializer

    def get_queryset(self):
        room_id = self.kwargs['room']
        return Message.objects.filter(room=room_id)

class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView): #PUT & DETLETE & RETRIEVE
    queryset = Message.objects.all()
    serializer_class = MessageSerializer