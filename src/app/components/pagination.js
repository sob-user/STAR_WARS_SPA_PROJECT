import { useSelector } from "react-redux";
import { useState, useEffect } from "react"

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
    const {store, currentPage} = pages;
    const aa = store?.data?.payload[currentPage.toLowerCase()];

    const Store = useSelector((state) => state);
    const ready = Store.data.ready;

    const [bindReady, setBindReady] = useState(false);

    useEffect(() => {
        if(ready) setTimeout(() => {setBindReady(true)}, 4000)
    }, [ready])

    return (
        <div style={STYLE}>
            { bindReady ? aa.map((page, index) => (
                <button 
                key={index}
                style={BUTTON_STYLE}
                onClick={(e) => setPageNumber(parseInt(e.target.innerText) - 1)}
                >{index + 1}</button>
            )): null}
        </div>
    );
}

export default Pagination;
