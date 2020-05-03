import * as React from "react";
import { Text, TouchableOpacity } from "react-native";

// import the global styles for the button
import globalStyles from "../styles/global";


export const StartButton = (props) => (
  <TouchableOpacity
    style={globalStyles.primaryBtn}
    onPress={props.onPress}
  >
    <Text
      style={globalStyles.primaryBtnText}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
