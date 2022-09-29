import React, { ReactNode, useEffect } from "react";
import { themeAwareStyles } from "../configs/themeAwareHook";
import reactotron from "reactotron-react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import TabComponent from "./tabComponent";

interface Props {
  navigation: any;
}

const Tab = createBottomTabNavigator();

export default function HomeScreen(props: Props) {
  const styles = themeAwareStyles();
  const config = useSelector((state: RootState) => state.interfaceConfig);

  useEffect(() => {
    props.navigation.setOptions(styles.screenWithoutHeader);
  }, [styles]);

  const generateTableTabs = () => {
    var tabs: ReactNode[] = [];
    config.Tabs.forEach((tab, index) => {
      tabs.push(
        <Tab.Screen name={tab.Name} component={TabComponent} key={index} />
      );
    });
    return tabs;
  };

  if (!config || !config.Tabs || config.Tabs.length == 0)
    return null;
  
  return <Tab.Navigator>{generateTableTabs()}</Tab.Navigator>;
}
