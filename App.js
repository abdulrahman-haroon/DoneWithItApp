import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("This is checking");

  let x;
  x.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.textcolor1}>
        Open up App.js to start working on your app Hamza!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  textcolor1: {
    color: "white",
  },
});
