import axios from 'axios';



export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return (
        axios
            .post('http://localhost:5000/api/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
            })
            .catch(err => console.log(err))
    )
}

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';
export const USER_ERROR = 'USER_ERROR';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    
    axios
        .get('http://localhost:5000/api/friends', {
            headers: {Authorization: localStorage.getItem('token')}
        })

        .then(res => {
            dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('failed: ', err.response);
            if(err.response.status === 403) {
                dispatch({type: USER_ERROR, payload: err.response});
            } else {
                dispatch({type: FETCH_FRIENDS_ERROR, payload: err.response })
            }
        })
}

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export const deleteFriends = id => dispatch => {
    dispatch({ type: DELETE_START });
    axios
        .delete(`http://localhost:5000/api/friends/${id}`, {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('failed', err.response);
            if (err.response.status === 403) {
                dispatch({ type: USER_ERROR, payload: err.response});
            } else {
                dispatch({ type: DELETE_ERROR, payload: err.response})
            }
        })
}