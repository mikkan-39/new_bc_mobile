import React, { useCallback, useEffect } from "react";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from "../configs/themeAwareHook";
import LoginComponent from "./loginComponent";
import { Logincreds } from "../redux-store/constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

interface Props {
  navigation: any;
}

export default function LoginScreen(props: Props) {
  const dispatch = useDispatch();
  const loginCallback = useCallback((creds: Logincreds) => dispatch(loginRequest(creds)), [dispatch]);
  const styles = themeAwareStyles();
  const { authorized, configured } = useSelector((state: RootState) => state)

  useEffect(() => {
    props.navigation.setOptions(styles.screenWithoutHeader);
    if (authorized && configured) props.navigation.navigate("Home")
  }, [styles, authorized, configured]);

  return (
    <LoginComponent 
      loginCallback={loginCallback}
      />
  );
}
