import { TOGGLE_PAGE } from "./types";

export const togglePage = (currentPage) => {
    return {
        type: TOGGLE_PAGE,
        payload: currentPage
    };
};
