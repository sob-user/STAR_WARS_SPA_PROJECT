import {
    LOAD_USER,
    CLEAR_USER,
    USER_LOADED
} from "../actions/types";

const initialState = {
    loading: false,
    loaded: true,
    user: null
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_USER:
            return {
                ...state,
                loading: true,
                loaded: false
            };
            case USER_LOADED:
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    user: action.payload
                };
            case CLEAR_USER:
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    user: null
                };
        default:
            return state;
    }
}
