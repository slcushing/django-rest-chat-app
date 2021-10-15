from rest_framework import serializers

from .models import Room, Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'body', 'room')
        # fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Room
        fields = ('id','title','messages',)