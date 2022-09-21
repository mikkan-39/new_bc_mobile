export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const FETCH_CONFIG_REQUEST = 'FETCH_CONFIG_REQUEST';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const FETCH_CONFIG_FAILED = 'FETCH_CONFIG_FAILED';


export type loginCreds = {
    username: string;
    password: string;
}