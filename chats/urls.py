from django.urls import path

from . import views

app_name = 'chats'

urlpatterns = [
    path('messages/<int:pk>/', views.MessageDetailAPIView.as_view(), name='message_detail'),
    path('messages/', views.MessageListAPIView.as_view(), name='message_list'),
    path('rooms/<int:pk>/', views.RoomDetailAPIView.as_view(), name='room_detail'),
    path('rooms/',views.RoomListAPIView.as_view(), name= 'room_list'),
]