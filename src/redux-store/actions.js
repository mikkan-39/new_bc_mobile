import * as types from './constants'

export const loginRequest = (creds) => {
  return {
    type: types.REQUEST_LOGIN,
    payload: creds // { username: string, password: string }
  }
}

export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS
  }
}

export const loginFailed = (err) => {
  return {
    type: types.LOGIN_FAILED,
    payload: err
  }
}

export const fetchConfigRequest = () => {
  return {
    type: types.FETCH_CONFIG_REQUEST
  }
}

export const fetchConfigSuccess = () => {
  return {
    type: types.FETCH_CONFIG_SUCCESS
  }
}

export const fetchConfigFailed = (err) => {
  return {
    type: types.FETCH_CONFIG_FAILED,
    payload: err
  }
}