import starWarsLogo4 from "../../svg/star-wars-4.svg";
import Image from "../../components/image";
import Loader from "../../components/loader";
import Message from "../../components/message";
import { useDispatch } from "react-redux";
import { loadUserFetch } from "../../../redux/actions/auth"
import { loadUserInfo, userLoaded, resetUSerInfo } from "../../../redux/actions/user"

function Loading(props) {
    const {setLoading, setIsAuthenticated} = props;
    const dispatch = useDispatch();


    setTimeout(async() => {

        dispatch(userLoaded());
        const user = loadUserFetch();

        if(user) {
            dispatch(loadUserInfo( await user));
            setIsAuthenticated(true);
            setLoading(false);
        } else {
            dispatch(resetUSerInfo());
            setIsAuthenticated(false);
            setLoading(false);
        }
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
