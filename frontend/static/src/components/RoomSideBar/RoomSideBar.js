function RoomSideBar(props) {
const roomListSideBarHTML = props.roomList.map((room) => (
    <li className='btn-group-vertical' key={room.id}>
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
        <aside>
            <ul>{roomListSideBarHTML}</ul>

        </aside>
    );
    }

export default RoomSideBar
