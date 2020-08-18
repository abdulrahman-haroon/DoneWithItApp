import React from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableOpacity style={styles.contianer} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText title={item.label} style={styles.label}></AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  contianer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
export default CategoryPickerItem;
