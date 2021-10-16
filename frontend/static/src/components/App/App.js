import './App.css';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import MessageForm from '../MessageForm/MessageForm';
import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
import RoomSideBar from '../RoomSideBar/RoomSideBar';
import MessageListView from '../MessageListView/MessageListView';
import LoginForm from '../LoginForm/LoginForm';


function App() {
  const handleError = (err) => console.warn(err);
  const [roomList, setRoomList] = useState([])
  const [messageList, setMessagesFromRoom] = useState([])
  

  const handleRegistration = async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    }

    const response = await fetch('/rest-auth/registration/', options).catch(handleError);
    if(!response) {
      console.warn(response);
    } else {
      const data = await response.json();
      Cookies.set('Authorization', `Token ${data.key}`)
    }
  }

  const handleLogin = async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user)
    }
    
    const response = await fetch('/rest-auth/login/', options).catch(handleError);
    if(!response) {
      console.warn(response);
    } else {
      const data = await response.json();
      Cookies.set('Authorization',`Token ${data.key}`)
    }
 
  }



  useEffect(() => {
    async function getRoomList() {
      const response = await fetch(`/api_v1/chats/rooms`);
      const data = await response.json();
      setRoomList(data);
    };
    getRoomList();
  }, [])

  
  async function getMessages(e) {
    const response = await fetch(`/api_v1/chats/rooms/${e.target.value}/`);
    const data = await response.json();
    setMessagesFromRoom(data.messages);
  };


  const handleMessage = async (body) => {
    const response = await fetch('/api_v1/chats/messages/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({body}),
    });

    if (response.ok) {
        console.log("message sent")
    };
}


  return (
    <div className="container">
      <RegistrationForm handleRegistration={handleRegistration}/>
      <LoginForm handleLogin={handleLogin}/>
      <RoomSideBar roomList={roomList} getMessages={getMessages}/>
      <MessageListView messageList={messageList}/>
      <MessageForm handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
