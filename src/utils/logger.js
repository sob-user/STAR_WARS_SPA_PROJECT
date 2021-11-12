function rendererIsReady() {
    const ready = "[RENDERER IS READY!]";
    console.log(ready);
}

function userIsAuthenticated(boolean) {
    const isAuth = '[USER IS ALREADY AUTHENTICATED!]';
    const notAuth = '[USER IS NOT AUTHENTICATED!]';
    const auth_status =  boolean ? isAuth : notAuth;
    console.log(auth_status);
}

export {
    rendererIsReady,
    userIsAuthenticated
}
