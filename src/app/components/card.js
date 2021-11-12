import { useSelector } from "react-redux"

function Card(props) {

    const { pageNumber } = props;

    const STYLE = {
        height: "120px",
        width: "120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        marginTop: "20px",
        marginLeft: "30px",
        marginRight: "30px",
        border: "2px solid",
        borderRadius: "5px",
        textTransform: "uppercase",
        fontSize: "1em",
        textAlign: "center"
    };

    const BUTTON_STYLE = {
        height: "30px",
        width: "100px",
        border: "2px solid black",
        borderRadius: "5px",
        margin: "7px",
        fontFamily: "inherit",
        textAlign: "center",
        fontSize: "1em",
        color: "black",
        cursor: "pointer",
        textTransform: "uppercase"
    };

    const store = useSelector((state) => state);
    const currentPage = store.navigation.currentPage.toLowerCase();
    const data = store.data.payload[currentPage][pageNumber || 0];

    return (
        <>
        {data.map((thisData, index) => (
            <div style={STYLE} key={index}>
                <div>{thisData.name}</div>
                <button style={BUTTON_STYLE}>more info</button>
            </div>
        ))}
        </>
    )
}

export default Card;
