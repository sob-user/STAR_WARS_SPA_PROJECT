function Button(props) {
    const { handleClick } = props;

    const STYLE = {
        height: "30px",
        width: "210px",
        border: "2px solid black",
        borderRadius: "5px",
        margin: "7px",
        fontFamily: "inherit",
        textAlign: "center",
        fontSize: "1.2em",
        color: "black",
        background: "#f9b500",
        cursor: "pointer"
    };

    return (
        <button 
        style={STYLE}
        onClick={handleClick}
        >
            valider
        </button>
    );
}

export default Button;
