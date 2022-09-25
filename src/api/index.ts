import axios, { AxiosError } from "axios";
import { Logincreds } from "../redux-store/constants";
const restURL = "http://nightly.claris.su/restservice.svc";
const androidURL = "http://nightly.claris.su/androidservice.svc";

const onError = (err: AxiosError) => {
  throw err;
};

export const loginRequest = async (creds: Logincreds) =>
  axios({
    url: `${restURL}/login`,
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      user: creds.username,
      password: creds.password,
    },
  }).catch(onError);

export const getConfig = async () =>
  axios({
    url: `${androidURL}/appconf`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).catch(onError);
