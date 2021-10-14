import './App.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
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
      Cookies.setItem('Authorization', `Token ${data.key}`)
    }
  }

  
  
  return (
    <div className="container">
      <RegistrationForm handleRegistration={handleRegistration}/>
    </div>
  );
}

export default App;
