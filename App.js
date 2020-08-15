import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Switch,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import LisitingDeatilsScreen from "./app/screens/LisitingDeatilsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/forms/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListEditScreen from "./app/screens/ListEditScreen";

export default function App() {
  
   
      
  const [category, setCategory] = useState();
  return (
    // <WelcomeScreen /> 
    // <ViewImageScreen />
    // <Screen>
    //  
    // </Screen>
  // <ListingScreen />
   //<LisitingDeatilsScreen /> 
    // <LoginScreen />
    // <RegisterScreen />
    
    <ListEditScreen />
    
    // <MessagesScreen />
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
