from rest_framework import serializers

from .models import Room, Message

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','title',)

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id','body','room')