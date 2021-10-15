import './App.css';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import MessageForm from '../MessageForm';
import Cookies from 'js-cookie';

function App() {
  const handleError = (err) => console.warn(err);

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
      console.warm(response);
    } else {
      const data = await response.json();
      Cookies.set('Authorization', `Token ${data.key}`)
    }
  }

  const handleMessage = async (body, room) => {
    const response = await fetch('/api_v1/messages/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({body, room}),
    });

    if (response.ok) {
        console.log("message sent")
    };
}


  return (
    <div className="container">
      <RegistrationForm handleRegistration={handleRegistration}/>
      <MessageForm handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
