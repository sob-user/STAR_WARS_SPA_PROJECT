import { useState } from "react";
import Loading from "./pages/public/loading";
import AuthIndex from "./pages/auth/authIndex";

function SwitchMan() {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const userIsLogged = isAuthenticated ? <AuthIndex /> : <p>not auth</p>;

    const STYLE = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems:" center",
        justifyContent: "center",
        background: "black"
    };

    return (
    <div style={STYLE}>
        {loading ? 
        <Loading 
            setLoading={setLoading} 
            setIsAuthenticated={setIsAuthenticated}
        /> 
        : userIsLogged}
    </div>
    )
}

export default SwitchMan;