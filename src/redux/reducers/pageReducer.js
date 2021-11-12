import {
    START_RESET_PAGE,
    STOP_RESET_PAGE
} from "../actions/types"


const initialState = {
    reset: false
};

export default function pageReducer(state = initialState, action) {
    switch(action.type) {
        case START_RESET_PAGE:
            return {
                ...state,
                reset: true,
            };
        case STOP_RESET_PAGE:
            return {
                ...state,
                reset: false,
            };
        default:
            return state;
    }
}
