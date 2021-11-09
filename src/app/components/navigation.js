import NavigationButton from "./navigation-button";
import { useDispatch, useSelector } from "react-redux";
import { togglePage } from "../../redux/actions/navigation"
import menuConfig from "../../utils/menuConfig";

function Navigation() {
    const store = useSelector((state) => state);
    const current = store.navigation.currentPage;

    const dispatch = useDispatch();

    const STYLE = {
        height: "53px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        background: "black"
    };

    function handleButtonNameClicked(e) {
        const buttonName = e.target.innerText;
        dispatch(togglePage(buttonName));
    }
    const navigationButtons = Object.keys(menuConfig);

    return (
        <div style={STYLE}>
            {navigationButtons.map((thisName, index) => (
                <NavigationButton 
                name={thisName}
                key={index}
                current={current === thisName ? true : false}
                returnCurrentClicked={handleButtonNameClicked}
                />
            ))}
        </div>
    );
}

export default Navigation;