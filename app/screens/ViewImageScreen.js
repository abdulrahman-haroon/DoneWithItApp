import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.png")}
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
    width: 60,
    height: 30,
    backgroundColor: Colors.primaryColor,
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteIcon: {
    width: 60,
    height: 30,
    backgroundColor: Colors.secondayColor,
    position: "absolute",
    top: 20,
    right: 20,
  },
});
