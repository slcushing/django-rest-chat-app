import {useState} from 'react';

function MessageForm(props) {
   const [newMessage, setNewMessage] = useState({});


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
                        placeholder="Message here"
                        onChange={handleChange}>
            </textarea>
        </div>
        <button type="submit" name={props.user} onChange={handleChange}>Send</button>

        </form>

    )
    
}

export default MessageForm