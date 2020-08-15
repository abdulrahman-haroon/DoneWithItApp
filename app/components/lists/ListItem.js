import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/color";
import color from "../../config/color";
function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevron=false
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={color.lightgray} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} title={title} numberOfLines={1} />
            {subTitle && <AppText style={styles.subTitle} title={subTitle}  numberOfLines={2} />}
          </View>
         {showChevron===true && <MaterialCommunityIcons name="chevron-right" size={25} />}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    alignItems:"center"
  },
  detailsContainer: {
    flex:1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
