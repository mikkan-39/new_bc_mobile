import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from '../configs/themeAwareHook';
import reactotron from "reactotron-react-native";

export default React.memo(function HomeScreen(props) {
  const dispatch = useDispatch()
  const onPress = () => dispatch(loginRequest())
  const styles = themeAwareStyles()
  const { navigation } = props
  navigation.setOptions(styles.defaultHeader)

  return (
    <View style={styles.mainScreenContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.defaultText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
});


