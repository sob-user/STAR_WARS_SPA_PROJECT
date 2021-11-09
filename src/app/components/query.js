import Select from "./select";
import { useSelector } from "react-redux";
import menuConfig from "../../utils/menuConfig";

function Query() {
    const store = useSelector((state) => state);
    const current = store.navigation.currentPage;

    const STYLE = {
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={STYLE}>
            {menuConfig[current].filters.map((filter, index) => (
                <Select
                key={index}
                query={filter.query} 
                options={filter.options}
                />
            ))}
        </div>
    )
}

export default Query;
