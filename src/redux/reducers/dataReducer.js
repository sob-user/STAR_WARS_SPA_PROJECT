import {
    LOADING_DATA,
    DATA_LOADED,
    DATA_CLEARED,
    DATA_REFRESH
} from "../actions/types";

const initialState = {
    loading: false,
    payload: null
};

export default function dataReducer(state = initialState, action) {
    switch(action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case DATA_LOADED:
            return {
                ...state,
                loading: false
            };
        case DATA_REFRESH:
            return {
                ...state,
                loading: false,
                payload: JSON.parse(sessionStorage.getItem("data"))
            };
        case DATA_CLEARED:
            return {
                ...state,
                loading: false,
                payload: null
            };
        default:
            return state;
    }
}
