import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import color from "../config/color";

import Constants from "expo-constants";

import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText title="No Internet Connect" style={{ color: color.white }} />
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.primaryColor,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
  },
});

export default OfflineNotice;
