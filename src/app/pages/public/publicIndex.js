import Login from "./login";
import Register from "./register";
import ForgotPassword from "./forgotPassword";
import { useSelector } from "react-redux";

function PublicIndex() {
    const store = useSelector((state) => state);
    const currentPage = store.navigation.currentPublicPage;

    const STYLE = {
        height: "100%",
        width: "100%",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }

    const publicPages = {
        login: <Login name={"login"}/>, 
        register: <Register name={"register"}/>, 
        reset_password: <ForgotPassword name={"reset_password"}/>
    };

    return(
        <div 
        style={STYLE}
        >
            {publicPages[currentPage]}
        </div>
    )
}

export default PublicIndex;
