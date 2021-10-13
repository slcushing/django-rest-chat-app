from django.db import models

# Create your models here.

class Room(models.Model):
    title = models.CharField(max_length = 255)

    def __str__(self):
        return self.title


class Message(models.Model):
    body = models.TextField()
    room = models.ForeignKey(Room, on_delete= models.CASCADE)

    
