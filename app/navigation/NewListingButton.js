import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={color.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.primaryColor,
    borderWidth: 10,
    borderColor: color.white,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 40,
    justifyContent: "center",
  },
});

export default NewListingButton;
