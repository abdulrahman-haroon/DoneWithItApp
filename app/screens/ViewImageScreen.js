import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <FontAwesome5 name="window-close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete-circle" size={40} color="white" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
