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
import LisitingDeatilsScreen from "./app/screens/LisitingDeatilsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/screens/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  {
    /* <WelcomeScreen /> */
  }
  {
    /* <ViewImageScreen /> */
  }

  {
    /* <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        Cards
      </Text>
      <Card
        title={"Black Grey Jacket For Sale"}
        subTitle={"Price: $100"}
        image={require("./app/assets/jacket.jpg")}
      /> */
  }

  {
    /* <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        Specific Card's Detail
      </Text>
      <LisitingDeatilsScreen /> */
  }
  return (
    // <MessagesScreen />
    <ListingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
