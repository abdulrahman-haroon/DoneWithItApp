import React from "react";
import { StyleSheet } from "react-native";
import ListEditScreen from "./app/screens/ListEditScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigation";

export default function App() {
  // const [category, setCategory] = useState();

  return (
    <NavigationContainer theme={NavigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
