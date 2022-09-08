import React, { useEffect } from "react";
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
        <TouchableOpacity style={styles.login.button} onPress={props.loginCallback}>
          <Text style={styles.login.text}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
