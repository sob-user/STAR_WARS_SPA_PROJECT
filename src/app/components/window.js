import menuConfig from "../../utils/menuConfig";
import DisplayData from "./displayData";
import Pagination from "./pagination";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react"

function Window() {
    const store = useSelector((state) => state);
    const currentPage = store.navigation.currentPage;
    const loadingData = store.data.ready;
    // const pages = store?.data?.payload[currentPage.toLowerCase()];
    const resetPageIndex = store.page.reset;

    const [ pageNumber, setPageNumber ] = useState(0);

    useEffect(() => {
        if(resetPageIndex) setPageNumber(0);
    }, [resetPageIndex])

    const STYLE = {
        width: "100%",
        height: "84%"
    }

    return (
        <div style={STYLE}>
            {menuConfig[currentPage].component}
            {loadingData ?
            <DisplayData 
            loading={loadingData}
            pageNumber={resetPageIndex ? 0 : pageNumber}
            /> : null }
            {loadingData ?
            <Pagination 
            pages={{store, currentPage}}
            setPageNumber={setPageNumber}
            /> : null}
        </div>
    );
}

export default Window;
