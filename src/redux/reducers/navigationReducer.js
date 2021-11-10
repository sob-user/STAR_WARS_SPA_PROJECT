import {
    TOGGLE_PAGE,
    TOGGLE_PUBLIC_PAGE
} from "../actions/types"


const initialState = {
    currentPage: "HOME",
    currentPublicPage: "login"
};

export default function navigationReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
         case TOGGLE_PUBLIC_PAGE:
            return {
                ...state,
                currentPublicPage: action.payload,
            };
        default:
            return state;
    }
}
