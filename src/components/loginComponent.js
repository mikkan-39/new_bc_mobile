import React, { useState, useCallback } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Platform
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
        behavior={
          Platform.select({
            ios: () => 'padding',
            android: () => null
          })()}
        keyboardVerticalOffset={
          Platform.select({
            ios: () => 0,
            android: () => -200
          })()}
      > 

        <View style={styles.login.helperView}/>

        <View style={styles.login.imageContainer}>
          <Image style={styles.login.image} source={logo} />
        </View>

        <View style={styles.login.helperView2}/>

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
