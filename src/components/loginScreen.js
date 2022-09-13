import React, { useCallback, useEffect } from "react";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from "../configs/themeAwareHook";
import reactotron from "reactotron-react-native";
import LoginComponent from "./loginComponent";

export default function LoginScreen(props) {
  reactotron.log("LoginScreen rendered");
  const dispatch = useDispatch();
  const loginCallback = useCallback((creds) => dispatch(loginRequest(creds)), [dispatch]);
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
