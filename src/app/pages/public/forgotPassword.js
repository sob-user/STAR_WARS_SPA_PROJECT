import Input from "../../components/input";
import Button from "../../components/button";
import Image from "../../components/image";
import AjustableNavbar from "../../components/ajustableNavbar";
import starWarsLogo2 from "../../svg/star-wars-4.svg";
import { useState } from "react";

function ForgotPassword() {
    const [body, setBody] = useState({});

    const handleBody = (e) => {
        let updateBody = body
        updateBody[e.target.name] = e.target.value
        setBody(updateBody);
    };

    const attemptToResetPassword = () => {
        // CALL API HERE 
        console.log(body)
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
        <Button handleClick={attemptToResetPassword}/>
        </>
    );
}

export default ForgotPassword;
