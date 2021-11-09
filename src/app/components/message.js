function Message(props) {
    const { message, color, fontSize } = props;
    const STYLE = { color, fontSize };

    return (
        <div style={STYLE}>
            {message}
        </div>
    );
}

export default Message;
