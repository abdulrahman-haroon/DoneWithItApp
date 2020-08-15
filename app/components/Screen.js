import React from "react";
import Constant from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style,styles.view ]}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
  view:{
    flex:1
  }
});
