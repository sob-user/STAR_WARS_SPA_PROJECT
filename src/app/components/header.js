import starWarsLogo2 from "../svg/star-wars-2.svg";
import Image from "./image";
import Sticker from "./stickers";
import User from "../svg/user.svg";
import Logout from "../svg/logout.svg";
import { useSelector } from "react-redux";
import menuConfig from "../../utils/menuConfig";
import { logoutUser } from "../../redux/actions/auth";

function Header(props) {

    const {setLoading, setIsAuthenticated} = props;

    const store = useSelector((state) => state);
    const currentPage = store.navigation.currentPage;
    
    // HERE WE IMPLEMENT CURRENT USER
    const currentUser = "Paulo";

    // HERE WE SIMULATE USER LOGOUT
    const logout = () => {
        logoutUser();
        setLoading(true);
        setIsAuthenticated(false);
        console.log("logout")
    }

    const HEADER_STYLE = {
        height: "63px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white"
    };

    return (
        <div style={HEADER_STYLE}>
            <Image 
                src={starWarsLogo2}
                alt="logo star wars"
                height="53px"
                width="auto"
                margin="20px"
            />
            <Sticker 
                src={menuConfig[currentPage].svg}
                alt={"compass svg"}
                height={"23px"}
                width={"auto"}
                margin={"0px"}
                info={currentPage}
                fontSize={"1.1em"}
            />
            <Sticker 
                src={User}
                alt={"user svg"}
                height={"23px"}
                width={"auto"}
                margin={"0px"}
                info={currentUser}
                fontSize={"1.1em"}
            />
            <Sticker 
                src={Logout}
                alt={"user svg"}
                height={"23px"}
                width={"auto"}
                margin={"0px"}
                info={"logout"}
                fontSize={"1.1em"}
                clickable={true}
                callbackFunc={logout}
            />
        </div>
    )
}

export default Header;
