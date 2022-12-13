import React, { useState, useCallback, useRef } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Platform,
  StyleProp,
  ImageStyle,
} from "react-native";
import { useStyles } from "../hooks/themeAwareHook";
const logo = require("../assets/logo.png");

interface Props {
  loginCallback: (arg0: Logincreds) => void;
}

export default function LoginComponent(props: Props) {
  const styles = useStyles();
  const passInput = useRef<TextInput>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    props.loginCallback({
      username,
      password,
    });
  };

  return (
    <View style={styles.defaultScreenBG}>
      <KeyboardAvoidingView
        style={styles.login.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
      >
        <View style={styles.login.helperView} />

        <View style={styles.login.imageContainer}>
          <Image
            style={styles.login.image as StyleProp<ImageStyle>}
            source={logo}
          />
        </View>

        <View style={styles.login.helperView2} />

        <TextInput
          testID="username"
          style={styles.login.field}
          onChangeText={setUsername}
          value={username}
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => passInput.current?.focus!()}
        />

        <TextInput
          testID="password"
          ref={passInput}
          style={styles.login.field}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          onSubmitEditing={onLoginPress}
          returnKeyType="go"
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
