import Input from "../../components/input";
import Button from "../../components/button";
import Image from "../../components/image";
import AjustableNavbar from "../../components/ajustableNavbar";
import starWarsLogo2 from "../../svg/star-wars-4.svg";
import { loginFetch } from "../../../redux/actions/auth";
import { useState } from "react";

function Login(props) {
    const [body, setBody] = useState({});
    const { setLoading } = props;

    const handleBody = (e) => {
        let updateBody = body
        updateBody[e.target.name] = e.target.value
        setBody(updateBody);
    };

    const attemptToLogin = () => {
        // CALL API HERE 
        console.log(body)
        loginFetch(body, setLoading)
    }

    return (
        <>
        <Image 
            src={starWarsLogo2}
            alt="logo star wars"
            height="53px"
            width="auto"
            margin="20px"
        />
        <AjustableNavbar />
        <Input 
        placeholder={"email"} 
        type={"email"} 
        handleBody={handleBody}
        />
        <Input 
        placeholder={"password"} 
        type={"password"} 
        handleBody={handleBody}
        />
        <Button handleClick={attemptToLogin}/>
        </>
    );
}

export default Login;
