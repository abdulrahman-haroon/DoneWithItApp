import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "./Screen";
import Card from "../components/Card";
import color from "../config/color";

const listings = [
  {
    id: 1,
    title: "GGray Jacket For Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Great Condition",
    price: 1000,
    image: require("../assets/couch.png"),
  },
  {
    id: 3,
    title: "TV Stand",
    price: 500,
    image: require("../assets/tvStand.jpg"),
  },
];
function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.lightgray,
  },
});
export default ListingScreen;
