import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_FRIENDS_ERROR, payload: 'null'})
        })
}