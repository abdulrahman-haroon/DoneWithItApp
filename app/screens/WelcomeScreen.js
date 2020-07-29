import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import Colors from "../config/color";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text>Sell Items That You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.font}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.font}>Register</Text>
      </View>
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
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.secondayColor,
    justifyContent: "center",
  },
  logo: {
    width: 130,
    height: 130,
    // left: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  font: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});
