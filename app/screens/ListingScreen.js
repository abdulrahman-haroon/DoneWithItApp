import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import color from "../config/color";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Gray Jacket For Sale",
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
function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISITING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.white,
  },
});
export default ListingScreen;
