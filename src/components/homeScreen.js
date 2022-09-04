import React, { useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from '../configs/themeAwareHook';
import reactotron from "reactotron-react-native";

export default React.memo(function HomeScreen(props) {
  const styles = themeAwareStyles()
  useEffect(() => {
    props.navigation.setOptions(styles.defaultHeader);
  }, [styles]);

  return (
    <View style={styles.defaultScreenBG}>
    </View>
  );
});


