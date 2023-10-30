import { Dimensions } from "react-native";

const { fontScale } = Dimensions.get("window");

export const getScaledFont = (fontSize : number) => {
  return fontSize / fontScale;
};