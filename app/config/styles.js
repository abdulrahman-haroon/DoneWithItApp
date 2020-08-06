import React from "react";

import color from "../config/color";
import { Platform } from "react-native";

export default {
  color,
  text: {
    color: color.darkGray,
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
