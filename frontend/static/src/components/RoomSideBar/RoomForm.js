import {useState} from 'react'
import Cookies from 'js-cookie';

function RoomForm(props) {
    const[newRoom, setNewRoom] = useState();

 
    const addNewRoom = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'), 
            },
            body: JSON.stringify([newRoom]),
        }

        const response = await fetch('/api_v1/chats/rooms/', options);
        if(!response) {
            console.warn(response);
        } else {
            setNewRoom([...props.roomList, newRoom])
            return response.json();
        }
    }
   

    function handleChange(e) {
        setNewRoom(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addNewRoom(newRoom);
        console.log({newRoom});
    }

    return (
        
        <div>
            <form className='room-add' onSubmit = {handleSubmit}>   
            <input type="text"
                    id="text"
                    placeholder="Add New Room"
                    name="addnewroom"
                    onChange={handleChange}
            />
            <button type='submit'>Add</button>
            </form>
        </div>
        
    );
}

export default RoomForm
