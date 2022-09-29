import * as types from './constants'
import { Androidconfig } from './helpers'

export const devAppInit = () => {
  return {
    type: types.DEV_APP_INIT
  }
}

export const loginRequest = (creds: types.Logincreds) => {
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

export const loginFailed = (err: Error) => {
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

export const fetchConfigSuccess = (config: Androidconfig) => {
  return {
    type: types.FETCH_CONFIG_SUCCESS,
    payload: config
  }
}

export const fetchConfigFailed = (err: Error) => {
  return {
    type: types.FETCH_CONFIG_FAILED,
    payload: err
  }
}