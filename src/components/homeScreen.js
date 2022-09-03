import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";

export default React.memo(function HomeScreen() {
  const dispatch = useDispatch()
  const onPress = () => dispatch(loginRequest())

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
});

