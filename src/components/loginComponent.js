import React, { useState, useCallback } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import { themeAwareStyles } from "../configs/themeAwareHook";
const logo = require('../assets/logo.png')

export default function LoginComponent(props) {
  const styles = themeAwareStyles();
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const onLoginPress = () => {
    props.loginCallback({
      username, password
    })
  };

  return (
    <View style={styles.defaultScreenBG}>
      <KeyboardAvoidingView
        style={styles.login.container}
        behavior='padding'
      >

        <View style={styles.login.imageContainer}>
          <Image style={styles.login.image} source={logo} />
        </View>

        <TextInput
          testID="username"
          style={styles.login.field}
          onChangeText={setUsername}
          value={username}
        />

        <TextInput
          testID="password"
          style={styles.login.field}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity
          testID="loginButton"
          style={styles.login.button}
          onPress={onLoginPress}
        >
          <Text style={styles.login.text}>Login</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}
