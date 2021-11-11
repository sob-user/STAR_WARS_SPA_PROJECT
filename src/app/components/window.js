import menuConfig from "../../utils/menuConfig";
import DisplayData from "./displayData";
import Pagination from "./pagination";
import { useSelector } from "react-redux";
import { useState } from "react"

function Window() {
    const store = useSelector((state) => state);
    const currentPage = store.navigation.currentPage;
    const loadingData = store.data.loading;
    const pages = store.data.payload[currentPage.toLowerCase()];

    const [ pageNumber, setPageNumber ] = useState(0);

    const STYLE = {
        width: "100%",
        height: "84%"
    }

    return (
        <div style={STYLE}>
            {menuConfig[currentPage].component}
            <DisplayData 
            loading={loadingData}
            pageNumber={pageNumber}
            />
            <Pagination 
            pages={pages}
            setPageNumber={setPageNumber}
            />
        </div>
    );
}

export default Window;
