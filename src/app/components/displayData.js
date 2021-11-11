import Loader from "./loader";
import Card from "./card";
import { useSelector } from "react-redux";

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
    const currentPage = store.navigation.currentPage.toLowerCase();
    const payload = store.data.payload[currentPage][pageNumber];

    return (
        <div style={STYLE}>
            {loading ? <Loader /> : <Card data={payload}/>}
        </div>
    );
}

export default DisplayData;
