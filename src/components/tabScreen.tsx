import { View } from "react-native";
import { useEffect } from "react";
import { themeAwareStyles } from "../configs/themeAwareHook";
import TabComponent from "./tabComponent";


interface Props {
  navigation: any;
}

export default function TabScreen(props: Props) {
  const styles = themeAwareStyles();
  useEffect(() => {
    props.navigation.setOptions(styles.screenWithHeader);
    props.navigation.setOptions(styles.tabBar);
  }, [styles]);
  return <TabComponent/>;
}