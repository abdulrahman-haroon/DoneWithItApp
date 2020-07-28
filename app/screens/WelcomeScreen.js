import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import Colors from "../config/color";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} />
        <Text>Sell Items That You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.primaryColor,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.secondayColor,
  },

  logoContainer: {
    position: "absolute",
    top: 50,
  },
});
