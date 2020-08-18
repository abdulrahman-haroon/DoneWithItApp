import React from "react";
import { View } from "react-native";
import AppText from "../AppText";

function ErrorMessage({ error, visible, onPress }) {
  if (!visible || !error) return null;
  return (
    <AppText
      style={{ color: "red", marginLeft: 10 }}
      title={error}
      onPress={onPress}
    />
  );
}

export default ErrorMessage;
