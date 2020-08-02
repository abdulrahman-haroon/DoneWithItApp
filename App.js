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
import Card from "./app/components/Card";
import LisitingDeatilsScreen from "./app/components/LisitingDeatilsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}

      {/* <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        Cards
      </Text>
      <Card
        title={"Black Grey Jacket For Sale"}
        subTitle={"Price: $100"}
        image={require("./app/assets/jacket.jpg")}
      /> */}

      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        Specific Card's Detail
      </Text>
      <LisitingDeatilsScreen />
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
