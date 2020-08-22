import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import ListingScreen from "../screens/ListingScreen";
import LisitingDeatilsScreen from "../screens/LisitingDeatilsScreen";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
