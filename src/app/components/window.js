import menuConfig from "../../utils/menuConfig";
import { useSelector } from "react-redux";

function Window() {
    const store = useSelector((state) => state);
    const currentPage = store.navigation.currentPage;

    const STYLE = {
        width: "100%",
        height: "84%"
    }

    return (
        <div style={STYLE}>
            {menuConfig[currentPage].component}
        </div>
    );
}

export default Window;
