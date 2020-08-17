import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/color";

function LisitingDeatilsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title} title="Gray Jacket For Sale" />
        <AppText style={styles.price} title="Price: $100" />

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
        </Text>
        <View style={styles.userContainer}>
          <ListItem
            title="User 1"
            subTitle="Listing 10"
            image={require("../assets/userImage.png")}
          />
        </View>
      </View>
    </View>
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
