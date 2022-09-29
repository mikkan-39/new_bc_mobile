export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const FETCH_CONFIG_REQUEST = 'FETCH_CONFIG_REQUEST';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const FETCH_CONFIG_FAILED = 'FETCH_CONFIG_FAILED';
export const DEV_APP_INIT = 'DEV_APP_INIT';
export const FETCH_TABLE_REQUEST = "FETCH_TABLE_REQUEST";
export const FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS";
export const FETCH_TABLE_FAILED = "FETCH_TABLE_FAILED";

export type Logincreds = {
    username: string;
    password: string;
}