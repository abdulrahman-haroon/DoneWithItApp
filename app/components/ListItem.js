import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import AppText from "./AppText";
import colors from "../config/color";
function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title} title={title} />
        <AppText style={styles.subTitle} title={subTitle} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitle: {
    color: colors.medium,
  },
});
export default ListItem;
