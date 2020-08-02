import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import Colors from "../config/color";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.image}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.tagLine}>Sell Items That You Don't Need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("Login Button Pressed")}
        />
        <AppButton
          color="secondayColor"
          title="Register"
          onPress={() => console.log("Register Button Pressed")}
        />
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

  logo: {
    width: 130,
    height: 130,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  btnContainer: {
    width: "80%",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});
