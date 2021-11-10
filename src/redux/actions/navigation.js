import { TOGGLE_PAGE, TOGGLE_PUBLIC_PAGE } from "./types";

export const togglePage = (page) => {
    return {
        type: TOGGLE_PAGE,
        payload: page
    };
};

export const togglePublicPage = (page) => {
    return {
        type: TOGGLE_PUBLIC_PAGE,
        payload: page
    };
};
