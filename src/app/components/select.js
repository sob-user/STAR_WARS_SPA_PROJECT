function Select(props) {
    const { query, options } = props;

    if(!Array.isArray(options)) throw Error("options must be an array");

    const STYLE = {
        width: "160px",
        height: "25px",
        borderRadius: "5px",
        border: "2px solid",
        margin: "20px",
        fontFamily: "inherit",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "0.9em",
        textAlign: "center"
    };

    return (
        <select style={STYLE}>
            <option>{query}</option>
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </select>
    )
}

export default Select
