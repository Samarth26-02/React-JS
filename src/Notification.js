function Notification(props){
    return(
        <div>
            <h2>Welcome to react...</h2>
            {props.hasNewMessage && <p>You have a new message</p>}
        </div>
    );
}

export default Notification;