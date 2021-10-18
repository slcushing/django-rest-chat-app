import './App.css';
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import MessageForm from '../MessageForm/MessageForm';
import RoomSideBar from '../RoomSideBar/RoomSideBar';
import RoomForm from '../RoomSideBar/RoomForm';
import MessageListView from '../MessageListView/MessageListView';
import LoginForm from '../LoginForm/LoginForm';
// import LogOut from '../LogOut/LogOut';


function App() {
  const handleError = (err) => console.warn(err);
  const [roomList, setRoomList] = useState([])
  const [messageList, setMessagesFromRoom] = useState([])
  const [selectedRoom, setSelectedRoom] = useState({id:0, title:'room0'});
  const [selection, setSelection] = useState(!!Cookies.get('Authorization') ? 'messages' : 'login');
  

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
      Cookies.set('Authorization', `Token ${data.key}`);
      setSelection('messages');
    }
  }

  const handleLogin = async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    }

    const response = await fetch('/rest-auth/login/', options).catch(handleError);
    if(!response) {
      console.warn(response);
    } else {
      const data = await response.json();
      Cookies.set('Authorization', `Token ${data.key}`);
      setSelection('messages');
    }
  }   

  const getRoomList = async () => {
    const response = await fetch(`/api_v1/chats/rooms`);
    const data = await response.json();
    setRoomList(data);
  }
  

  useEffect(() => {
    getRoomList();
  }, [])

  
  async function getMessages(e) {
    const response = await fetch(`/api_v1/chats/rooms/${e.target.value}/`);
    const data = await response.json();
    const matchedRoom = roomList.find(roomList => {
      const roomIDStr = roomList.id.toString()
      return roomIDStr === e.target.value
    })
    setSelectedRoom(matchedRoom)
    setMessagesFromRoom(data.messages);
  };


  async function handleMessage(user, body){
    
    const newMessage = {
      user: user, 
      room: selectedRoom.id,
      body: body, 
    };
    console.log({newMessage});

    const response = await fetch(`/api_v1/chats/${selectedRoom.id}/`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(newMessage),
    });
    if(response.ok){
      return response.json(); 
    }  
  }


  return (
    <>
    {selection === 'login' &&  <LoginForm handleLogin={handleLogin}/>}
    {selection === 'registration' && <RegistrationForm handleRegistration={handleRegistration}/>}
    {selection === 'messages' && (
       <div className="app">
       <header className="header">The Return of AIM </header>
       <div className="container">
 
         <div className="message-container">
           <header className="message-window-header">Message Window</header>
           <MessageListView messageList={messageList} selectedRoom={selectedRoom}/>
           <MessageForm handleMessage={handleMessage}/>
         </div>
         <div className="rooms-container">
           <RoomSideBar roomList={roomList} getMessages={getMessages}/>
         </div>
       </div>
     </div>
    )}
    </>
  );
}

export default App;


// {<RegistrationForm handleRegistration={handleRegistration}/>
// <LoginForm handleLogin={handleLogin}/>
// <MessageForm handleMessage={handleMessage}/>
{/* <button className="btn-logout" onClick={() => {setDisable(true); setSelection('LogOut')}}> Log Out </button>} */}


  // const [disable, setDisable] = useState(false)
  // const [selection, setSelection] = useState('RegistrationForm', 'LoginForm')
  // let html;

  // if(selection === 'LoginForm') {
  //   html = <LoginForm handleLogin={handleLogin}/>
  // } else if (selection === 'MessageForm'){
  //   html = <MessageForm handleMessage={handleMessage}/>
  // } else if (selection === 'RegistrationForm') {
  //   html = <RegistrationForm handleRegistration={handleRegistration}/>
  // } else if (selection === 'MessageListView') {
  //   html = <MessageListView messageList={messageList} selectedRoom={selectedRoom}/>
  // } else if (selection === 'LogOut') {
  //   html = <LogOut />
  // }