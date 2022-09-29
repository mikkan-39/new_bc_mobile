import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Theme } from "./themesConstants";

export const tabStyles = (
  theme: Theme
): { [styleName: string]: ViewStyle | TextStyle | ImageStyle } => {
    return {
        ScrollView: {
            flex: 1,
        }
    }
};
