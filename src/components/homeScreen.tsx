import React, { ReactNode, useEffect } from "react";
import { useStyles } from "../hooks/themeAwareHook";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import TabScreen from "./tabScreen/tabScreen";

interface Props {
  navigation: any;
}

const Tab = createBottomTabNavigator();

export default function HomeScreen(props: Props) {
  const styles = useStyles();
  const config = useSelector((state: RootState) => state.interfaceConfig);

  useEffect(() => {
    props.navigation.setOptions(styles.screenWithoutHeader);
  }, [styles]);

  const generateTableTabs = () => {
    var tabs: ReactNode[] = [];
    config.Tabs.forEach((tab, index) => {
      tabs.push(
        <Tab.Screen
          name={tab.Name}
          component={TabScreen}
          key={index}
          initialParams={{ parentTable: tab }}
        />
      );
    });
    return tabs;
  };

  if (!config || !config.Tabs || config.Tabs.length == 0) return null;

  return <Tab.Navigator>{generateTableTabs()}</Tab.Navigator>;
}
