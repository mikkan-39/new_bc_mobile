import React, { useCallback, useEffect } from "react";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from "../configs/themeAwareHook";
import LoginComponent from "./loginComponent";
import { Logincreds } from "../redux-store/constants";

interface Props {
  navigation: any;
}

export default function LoginScreen(props: Props) {
  const dispatch = useDispatch();
  const loginCallback = useCallback((creds: Logincreds) => dispatch(loginRequest(creds)), [dispatch]);
  const styles = themeAwareStyles();
  useEffect(() => {
    props.navigation.setOptions(styles.screenWithoutHeader);
  }, [styles]);

  return (
    <LoginComponent 
      loginCallback={loginCallback}
      />
  );
}
