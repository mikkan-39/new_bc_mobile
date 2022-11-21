import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export interface StyleStorage {
  [styleName: string]: StyleStorage | ViewStyle | ImageStyle | TextStyle;
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

export interface Theme {
  id: string;
  accentColor: Color; // bright, saturated
  secondaryColor: Color;
  onAccentColor: Color; // accentColor when selected
  surfaceColor: Color; // elements above page's background
  backgroundColor: Color; // page backgound
  statusbar: "light-content" | "dark-content"; // statusbar mode
  textColor: Color;
  fontSize: number;
  rounding: number;
}

const DEFAULT_ROUNDING = 15;

export const LIGHT_THEME: Theme = {
  id: "default-light",
  accentColor: "#976dd7",
  secondaryColor: "#999",
  onAccentColor: "#fff",
  surfaceColor: "#fff",
  backgroundColor: "#eee",
  statusbar: "dark-content",
  textColor: "#000",
  fontSize: 20,
  rounding: DEFAULT_ROUNDING,
};

export const DARK_THEME: Theme = {
  id: "default-dark",
  accentColor: "#774ec2",
  secondaryColor: "#666",
  onAccentColor: "#fff",
  surfaceColor: "#333",
  backgroundColor: "#222",
  statusbar: "light-content",
  textColor: "#fff",
  fontSize: 20,
  rounding: DEFAULT_ROUNDING,
};
