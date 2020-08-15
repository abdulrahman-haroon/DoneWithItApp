import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
function PickerItem({  onPress,item }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.text} title={item.label} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default PickerItem;
