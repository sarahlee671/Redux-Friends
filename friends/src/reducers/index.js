import {FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_ERROR, LOGIN_START, LOGIN_SUCCESS, DELETE_START, DELETE_SUCCESS} from "../actions";
const initialState = {
    friends: [],
    fetchingFriends: false,
    error: null,
    errorStatusCode: null,
    isLoggingIn: false,
    token: localStorage.getItem('token'),
    deletingFriend: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isLoggingIn: false,
            };
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
 
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                error: '',
                friends: action.payload
                
            };
        case DELETE_START:
            return {
                ...state,
                deletingFriend: false,
                error: '',
                errorStatusCode: null,
                friends: action.payload
            };
        
        default:
            return state;
    }
}

export default reducer;