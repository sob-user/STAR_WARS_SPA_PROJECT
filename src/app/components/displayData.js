import Loader from "./loader";
import Card from "./card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react"

function DisplayData(props) {
    const { loading, pageNumber } = props;

    const STYLE = {
        height: "420px",
        width: "100%",
        display: "flex",
        alignItems: loading ? "center" : "initial",
        justifyContent: loading ? "center" : "initial",
        flexWrap: "wrap",
    };

    const store = useSelector((state) => state);
    const ready = store.data.ready;

    const [bindReady, setBindReady] = useState(false);
    useEffect(() => {
        if(ready) setTimeout(() => {setBindReady(true)}, 4000)
    }, [ready])

    return (
        <div style={STYLE}>
            {bindReady ? <Card pageNumber={pageNumber}/> : <Loader />}
        </div>
    );
}

export default DisplayData;
