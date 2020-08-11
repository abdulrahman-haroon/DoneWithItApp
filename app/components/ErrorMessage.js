import React from "react";
import { View } from "react-native";
import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={{ color: "red", marginLeft: 25 }} title={error} />;
}

export default ErrorMessage;
