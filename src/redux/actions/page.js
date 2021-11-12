import { START_RESET_PAGE, STOP_RESET_PAGE } from "./types";

export const startResetPage = () => {
    return { type: START_RESET_PAGE };
};

export const stopResetPage = () => {
    return { type: STOP_RESET_PAGE };
};
