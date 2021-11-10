import svg_search from "../svg/search.svg";

function InputSearch() {
    const STYLE = {
        height: "20px",
        width: "180px",
        border: "2px solid",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "20px",
        background: "white"
    }

    const INPUT_STYLE = {
        height: "18px",
        width: "148px",
        border: "none",
        background: "transparent",
        fontFamily: "inherit",
        fontSize: "1.1em",
        color: "#8b6b0b",
        textAlign: "center",
        outline: "none"
    }

    const IMAGE_STYLE = {
        height: "15px",
        width: "auto"
    }

    return (
        <div style={STYLE}>
            <input style={INPUT_STYLE}></input>
            <img style={IMAGE_STYLE} src={svg_search} alt="search svg"></img>
        </div>
    );
}

export default InputSearch;
