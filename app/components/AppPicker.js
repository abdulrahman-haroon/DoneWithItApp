import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";

import PickerItem from "./PickerItem";

function AppPicker({ icon, items,numOfColumns=1, onSelectItem, PickerItemComponent=PickerItem,placeholder, selectedItem,width="100%" }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container,{width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyle.color.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text} title={selectedItem.label} />
          ) : (
            <AppText style={styles.placeholder} title={placeholder} />
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyle.color.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList

            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
              item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.color.lightgray,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyle.color.medium,
    flex: 1,
  },
});
export default AppPicker;
