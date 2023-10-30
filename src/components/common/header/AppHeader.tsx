import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getScaledFont } from "../FontSize";

const AppHeader = ({
  showLeftIcon,
  title,
  backCallback,
  titleStyle,
  leftIcon = require("../../../assets/Icons/backIcon.png"),
  customLeftIcon = null,
  leftIconContainerStyle,
  rightIcon = null,
  rightButtonAction,
  rightButtonContainerStyles,
  headerContainerStyle,
} : any) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container, headerContainerStyle]}>
      {showLeftIcon && (
        <TouchableOpacity
          onPress={backCallback ? () => backCallback(navigation) : () => {}}
          style={[
            { width: 16, height: 20, marginHorizontal: 20 },
            leftIconContainerStyle,
          ]}
          disabled={!backCallback}
        >
          {customLeftIcon ? (
            customLeftIcon
          ) : (
            <Image
              source={leftIcon}
              style={styles.backIcon}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      )}
      <View style={{ width: "80%" }}>
        {title && (
          <Text numberOfLines={1} style={[styles.title, titleStyle]}>
            {title}
          </Text>
        )}
      </View>
      {rightIcon && (
        <TouchableOpacity
          onPress={rightButtonAction}
          style={[styles.rightButtonContainer, rightButtonContainerStyles]}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: undefined,
    aspectRatio: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: getScaledFont(22),
    color: "#434343",
  },
  rightButtonContainer: {
    right: "5%",
    position: "absolute",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
    width: "7%",
  },
  backIcon: {
    width: "100%",
    height: "100%",
  },
});
export default AppHeader;
