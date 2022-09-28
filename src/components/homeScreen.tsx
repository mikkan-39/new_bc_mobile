import React, { useEffect } from "react";
import { View } from "react-native";
import { themeAwareStyles } from '../configs/themeAwareHook';
import reactotron from "reactotron-react-native";

interface Props {
  navigation: any;
}

export default function HomeScreen(props: Props) {
  const styles = themeAwareStyles();
  useEffect(() => {
    props.navigation.setOptions(styles.screenWithHeader);
  }, [styles]);

  return (
    <View style={styles.defaultScreenBG}>
    </View>
  );
}


