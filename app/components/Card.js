import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import colors from "../config/color";
import AppText from "../components/AppText";

function card({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={image} />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title} title={title} />
          <AppText style={styles.subtitle} title={subTitle} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: colors.cardBackground,
    width: "95%",
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.secondayColor,
    fontWeight: "bold",
  },
});
export default card;
