import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/color";
import Screen from "../components/Screen";

function LisitingDeatilsScreen({ route }) {
  const listings = route.params;
  return (
    <Screen>
      <Image
        style={styles.image}
        uri={listings.images[0].url}
        preview={{ uri: listings.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title} title={listings.title} />
        <AppText style={styles.price} title={"Price: $" + listings.price} />
        {/* 
        TODO: if you want to add it then add it else no need.
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}
        >
          Users & Listing
        </Text> */}
        <View style={styles.userContainer}>
          <ListItem
            title="User 1"
            subTitle="Listing 10"
            image={require("../assets/userImage.png")}
          />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondayColor,
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
  },
});
export default LisitingDeatilsScreen;
