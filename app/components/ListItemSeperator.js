import React from "react";
import color from "../config/color";
import { StyleSheet, View } from "react-native";

function ListItemSeperator(props) {
  return <View style={styles.separtor} />;
}
const styles = StyleSheet.create({
  separtor: {
    width: "100%",
    height: 1,
    backgroundColor: color.lightgray,
  },
});
export default ListItemSeperator;
