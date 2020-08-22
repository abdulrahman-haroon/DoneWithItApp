import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import ListingScreen from "../screens/ListingScreen";
import LisitingDeatilsScreen from "../screens/LisitingDeatilsScreen";

const Stack = createStackNavigator();
const FeedNavigation = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
    <Stack.Screen
      name={routes.LISITING_DETAILS}
      component={LisitingDeatilsScreen}
    />
  </Stack.Navigator>
);
export default FeedNavigation;
