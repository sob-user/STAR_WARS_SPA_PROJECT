function Input(props) {
    const { placeholder, type, handleBody } = props;

    const STYLE = {
        height: "25px",
        width: "200px",
        border: "2px solid",
        borderRadius: "5px",
        margin: "7px",
        fontFamily: "inherit",
        textAlign: "center",
        fontSize: "1.2em",
        color: "black",
        outline: "none"
    };

    return (
        <input 
        placeholder={placeholder} 
        name={placeholder}
        style={STYLE}
        type={type}
        onChange={handleBody}
        >
        </input>
    );
}

export default Input;
