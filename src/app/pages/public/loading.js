import starWarsLogo4 from "../../svg/star-wars-4.svg";
import Image from "../../components/image";
import Loader from "../../components/loader";
import Message from "../../components/message";

function Loading(props) {
    const {setLoading, setIsAuthenticated} = props;

    setTimeout(() => {
        // CALL API BETWEEN HERE
        setIsAuthenticated(true);
        setLoading(false);
        // AND HERE
    }, 3000);

    const loadingMessage = "Be patient, we look if the force be with you ...";

    return (
        <>
        <Image 
        src={starWarsLogo4}
        alt="logo star wars"
        height="auto"
        width="150px"
        margin="0px"
        />
        <Loader />
        <Message
        message={loadingMessage}
        fontSize={"1.2em"}
        color={"#f9b500"}
        />
        </>
    )
}

export default Loading;
