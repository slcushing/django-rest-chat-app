import RoomForm from "./RoomForm";

function RoomSideBar(props) {
const roomListSideBarHTML = props.roomList.map((room) => (
    <li className='room-button' key={room.id}>
        <button value={room.id}
                className='mt-2'
                type='button'
                onClick={props.getMessages}
                >
            {room.title}
        </button>
    </li>
    ));

    return (
        <aside className="room-side-bar">
            <header className="rooms-header">Chat Rooms</header>
            <ul>{roomListSideBarHTML}</ul>
            <RoomForm />
        </aside>
    );
    }

export default RoomSideBar
