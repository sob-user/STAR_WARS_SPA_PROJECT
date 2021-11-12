import { LOAD_USER, CLEAR_USER, USER_LOADED } from "./types";

export const loadUserInfo = (user) => {
    return { type: USER_LOADED, payload: user };
};

export const userLoaded = () => {
    return { type: LOAD_USER };
}

export const resetUSerInfo = () => {
    return { type: CLEAR_USER };
};
