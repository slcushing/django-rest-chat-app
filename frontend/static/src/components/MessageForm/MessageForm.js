//what does it mean to be a message
//in chats app, in models a message is : body, room, user
import {useState} from 'react';
import RoomSideBar from '../RoomSideBar/RoomSideBar';

function MessageForm(props) {
   const [newMessage, setNewMessage] = useState({});

//the below could potentially change
    const handleChange = (e) => {
        const {message, value} = e.target;
        setNewMessage(prevState => ({
            ...prevState,
            [message]:value,
        })); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleMessage(newMessage)
    }

    return (
        <form className='mt-2' onSubmit = {handleSubmit}>
        <div className= "form-group mb-2">
            <textarea id='body' 
                        name='body' 
                        placeholder='Message here'
                        onChange={handleChange}>

            </textarea>
        </div>
        <button type="submit" name={props.user} onSubmit={handleChange}>Send</button>

        </form>

    )
    
}

// async function SendMessage(body, room, user) {
//     const newMessage = {body, room, user};
//     const response = await fetch('', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newMessage),
//     });

//     if (response.ok) {
//         console.log("message sent")
//     };
// }

export default MessageForm