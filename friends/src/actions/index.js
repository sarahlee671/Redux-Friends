import axios from 'axios';
import {axiosWithAuth} from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth 
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_FRIENDS_ERROR})
        })
}

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => console.log(err))
}