import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
