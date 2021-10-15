from django.db import models
from django.conf import settings

# Create your models here.

class Room(models.Model):
    title = models.CharField(max_length = 255)

    def __str__(self):
        return self.title


class Message(models.Model):
    body = models.TextField()
    room = models.ForeignKey(Room, related_name="messages", on_delete= models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.body

    
