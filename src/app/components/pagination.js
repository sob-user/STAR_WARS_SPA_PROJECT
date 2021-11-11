function Pagination(props) {
    const STYLE = {
        height: "80px",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }

    const BUTTON_STYLE = {
        height: "30px",
        width: "30px",
        border: "2px solid black",
        borderRadius: "5px",
        margin: "7px",
        fontFamily: "inherit",
        textAlign: "center",
        fontSize: "1em",
        color: "black",
        cursor: "pointer",
        fontWeight: "bold",
        textTransform: "uppercase"
    };

    const { pages, setPageNumber } = props;

    return (
        <div style={STYLE}>
            {pages.map((page, index) => (
                <button 
                key={index}
                style={BUTTON_STYLE}
                onClick={(e) => setPageNumber(parseInt(e.target.innerText) - 1)}
                >{index + 1}</button>
            ))}
        </div>
    );
}

export default Pagination;
