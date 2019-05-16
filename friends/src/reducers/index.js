const initialState = {
    friends: [],
    fetchingFriends: false,
    error: '',
    token: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
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
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                token: action.payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}