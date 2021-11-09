import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Window from "../../components/window";

function AuthIndex() {
    const STYLE = {
        height: "100%",
        width: "100%",
        background: "#F5F5F5"
    }

    return(
        <div 
        className="AuthIndex"
        style={STYLE}
        >
            <Header />
            <Navigation />
            <Window />
        </div>
    )
}

export default AuthIndex;
