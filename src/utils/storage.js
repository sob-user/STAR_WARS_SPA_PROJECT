const DATA = sessionStorage.getItem("data");

function checkPersistentDataExist() {
    if(DATA === null) return false;
    return true;
}

function getPersistentData() {
    return JSON.parse(DATA);
}

function setPersitentData(data) {
    sessionStorage.setItem("data", JSON.stringify(data));
}

export { checkPersistentDataExist, getPersistentData, setPersitentData };
