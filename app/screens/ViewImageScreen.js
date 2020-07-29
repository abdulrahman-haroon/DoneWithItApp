import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Text>Close</Text>
      </View>
      <View style={styles.deleteIcon}>
        <Text>Delete</Text>
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
    width: 80,
    height: 40,
    backgroundColor: Colors.primaryColor,
    position: "absolute",
    top: 20,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    width: 80,
    height: 40,
    backgroundColor: Colors.secondayColor,
    position: "absolute",
    top: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
