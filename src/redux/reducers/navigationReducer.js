import {
    TOGGLE_PAGE
} from "../actions/types"


const initialState = {
    currentPage: "HOME",
};

export default function navigationReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
}
