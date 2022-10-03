import axios, { AxiosError } from "axios";
import reactotron from "reactotron-react-native";
import { Logincreds, Tableinconfig } from "../redux-store/helpers";
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

const api = axios.create({
  baseURL: restURL,
  headers: {
    "Cache-Control": "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const setAuthHeader = (token: string) => {
  api.defaults.headers.common[
    "cookies"
  ] = `ASP.NET_SessionId=${token}; path=/; HttpOnly`;
};

export const getSqlTable = async (table: Tableinconfig) => {
  // reactotron.log!(table)
  const { Table, Left, Right, Review, Field } = table;
  return api.get(`/businessObject/${Table}/review/${Review}`, {
    params: {
      Field, Left, Right
    }
  });
};
