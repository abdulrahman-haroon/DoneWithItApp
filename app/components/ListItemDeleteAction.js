import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={color.white}
        ></MaterialCommunityIcons>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    backgroundColor: color.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
