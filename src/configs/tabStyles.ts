import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { StyleStorage, Theme } from "./themesConstants";

export const tabStyles = (
  theme: Theme
): StyleStorage => {
    return {
        ScrollView: {
            flex: 1,
        },
    }
};
