function MessageListView(props) {
    const messageListViewHTML = props.messageList.map((message) => (
        <div key={message.id}>
            {message.body}
        </div>
    ));

    return (
        <section>{messageListViewHTML}</section>
    )
}

export default MessageListView