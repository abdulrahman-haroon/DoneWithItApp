import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Screen from "./Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        typeContextType="emailAddress" //IOS
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        typeContextType="password" //IOS
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
});
export default LoginScreen;
