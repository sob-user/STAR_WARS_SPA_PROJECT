import api from "../../axios/salem-oulad.com";

async function loginFetch(body, setLoading) {
    try {
        const response = await api.post('auth/login', body);
        if(response.status === 200) setLoading(true);
    } catch (err) {
        console.log(err.response.data.msg)
    }
}

async function loadUserFetch() {
    try {
        await api.post('auth/token')
        const response = await api.get('user');
        const user = response.data
        return user
    } catch (err) {
        console.log(err.response.data.msg);
        return false;
    }
}

async function logoutUser() {
    try {
        await api.post('auth/token')
        const response = await api.post('auth/logout')
        console.log(response.data)
        return true
    } catch (err) {
        console.log(err.response.data.msg);
        return false;
    }
}

export { loginFetch, loadUserFetch, logoutUser };
