import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/color";
//
function AppButton({ title, onPress, color = "primaryColor" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  btnTitle: {
    color: "white",
    fontSize: 24,
    // textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default AppButton;
