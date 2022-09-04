import React, { useCallback, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from "../configs/themeAwareHook";
import reactotron from "reactotron-react-native";
const logo = require('../assets/logo.png')

export default function LoginScreen(props) {
  reactotron.log("LoginScreen rendered");
  const dispatch = useDispatch();
  const loginCallback = useCallback(() => dispatch(loginRequest()), [dispatch]);
  const styles = themeAwareStyles();
  useEffect(() => {
    props.navigation.setOptions(styles.screenWithoutHeader);
  }, [styles]);

  return (
    <View style={styles.defaultScreenBG}>
      <KeyboardAvoidingView
        style={styles.login.container}
        behavior='padding'
      >
        <View style={styles.login.imageContainer}>
          <Image style={styles.login.image} source={logo} />
        </View>
        <TextInput style={styles.login.field}/>
        <TextInput
          style={styles.login.field}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.login.button}>
          <Text style={styles.login.text}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
