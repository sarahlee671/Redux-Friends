import {FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from "../actions";
const initialState = {
    friends: [],
    fetchingFriends: false,
    error: '',
    ifLoggingIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: ''
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                error: '',
                friends: [...state.friends, ...action.payload]
            };
        case FETCH_FRIENDS_ERROR:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
            };
        default:
            return state;
    }
}

export default reducer;