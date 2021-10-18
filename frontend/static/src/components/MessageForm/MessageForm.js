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
        <div className= "form-group">
            <textarea id='body' 
                        className="text-area"
                        name='body' 
                        placeholder="Message here"
                        onChange={handleChange}>
            </textarea>
            <button type="submit" name={props.user} onChange={handleChange}>Send</button>
        </div>
        </form>

    )
    
}

export default MessageForm