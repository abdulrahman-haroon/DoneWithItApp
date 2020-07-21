import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const handlePressed = () => console.log("Pressed");
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePressed}>
        Open up App.js to start working on your app Ar!
      </Text>
      <Image
        blurRadius={0.5}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/seed/picsum/200/300",
        }}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
