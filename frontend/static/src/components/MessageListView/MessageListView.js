function MessageListView(props) {
    const messageListViewHTML = props.messageList.map((message) => (
        <div className="message-body" key={message.id}>
            {message.body}
        </div>
    ));

    return (
        <section className="message-list-view">
           
            {messageListViewHTML}
            
        </section>
    )
}

export default MessageListView