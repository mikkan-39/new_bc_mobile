import React, { useCallback, useEffect } from "react";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from "../configs/themeAwareHook";
import LoginComponent from "./loginComponent";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { Alert } from "react-native";

interface Props {
  navigation: any;
}

export default function LoginScreen(props: Props) {
  const dispatch = useDispatch();
  const loginCallback = useCallback(
    (creds: Logincreds) => dispatch(loginRequest(creds)),
    [dispatch]
  );
  const styles = themeAwareStyles();
  const { authorized, configured, error } = useSelector(
    (state: RootState) => state
  );

  useEffect(() => {
    if (error != null) {
      Alert.alert(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (authorized && configured) props.navigation.navigate("Home");
  }, [authorized, configured]);

  useEffect(() => {
    props.navigation.setOptions(styles.screenWithoutHeader);
  }, [styles]);

  return <LoginComponent loginCallback={loginCallback} />;
}
