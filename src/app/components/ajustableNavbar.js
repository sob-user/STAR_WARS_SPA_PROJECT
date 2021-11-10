import NavigationButton from "./navigation-button";
import { useSelector, useDispatch } from "react-redux";
import { togglePublicPage } from "../../redux/actions/navigation";

function AjustableNavbar() {
    const store = useSelector((state) => state);
    const currentPage = store.navigation.currentPublicPage;

    const dispatch = useDispatch();

    const handleButtonNameClicked = (e) => {
        const buttonName = e.target.innerText.replace(" ", "_");
        dispatch(togglePublicPage(buttonName));
    }

    const STYLE = {
        height: "30px",
        width: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "7px"
    };

    const pages = ["login", "register", "reset password"];

    return (
        <div style={STYLE}>
            {pages.map((page, index) => (
                <NavigationButton 
                name={page}
                key={index} 
                current={currentPage.replace("_", " ") === page ? true : false} 
                returnCurrentClicked={handleButtonNameClicked}
                color={"white"}
                />
            ))}
        </div>
    )
}

export default AjustableNavbar;
