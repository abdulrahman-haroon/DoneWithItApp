import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

import color from "../config/color";

function AppText({ title, style,...otherProps }) {
  return <Text style={[styles.Text, style]} {...otherProps}>{title}</Text>;
}
const styles = StyleSheet.create({
  Text: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        fontWeight: "bold",
        color: color.primaryColor,
        fontFamily: "Avenir",
      },
      andriod: {
        fontSize: 24,
        fontWeight: "bold",
        color: color.primaryColor,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;
