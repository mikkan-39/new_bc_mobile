import React, { useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { loginRequest } from "../redux-store/actions";
import { useDispatch } from "react-redux";
import { themeAwareStyles } from '../configs/themeAwareHook';
import reactotron from "reactotron-react-native";

export default React.memo(function HomeScreen(props) {
  // hook hell. Or maybe not
  const dispatch = useDispatch()
  const onPress = useCallback(() => dispatch(loginRequest()), [dispatch])
  const styles = themeAwareStyles()
  useEffect(() => {
    props.navigation.setOptions(styles.defaultHeader);
  }, [styles]);

  return (
    <View style={styles.mainScreenContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.defaultText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
});


