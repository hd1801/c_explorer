import { Theme } from "@react-navigation/native";

export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 96.08%)", // background
    border: "hsl(222.2 84% 4.9%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(215.09 100% 20.78%)", // primary
    text: "hsl(222.2 84% 4.9%)", // foreground
  },
  dark: {
    background: "hsl(0 0% 96.08%)", // background
    border: "hsl(222.2 84% 4.9%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(215.09 100% 20.78%)", // primary
    text: "hsl(222.2 84% 4.9%)", // foreground
  },
};

export const fontStyle: Theme["fonts"] = {
  bold: {
    fontFamily: "",
    fontWeight: "bold",
  },
  heavy: {
    fontFamily: "",
    fontWeight: "600",
  },
  medium: {
    fontFamily: "",
    fontWeight: "500",
  },
  regular: {
    fontFamily: "",
    fontWeight: "400",
  },
};

export const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
  fonts: fontStyle,
};
export const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
  fonts: fontStyle,
};
