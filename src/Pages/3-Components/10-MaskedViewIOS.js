import React, { PureComponent } from "react";
import { View, Text, MaskedViewIOS } from "react-native";

export default class MaskedViewIOSDemo extends PureComponent {
  render() {
    return (
      <MaskedViewIOS
        style={{ flex: 1, flexDirection: "row", height: "100%" }}
        maskElement={
          <View>
            <Text style={{ fontSize: 60, color: "black", fontWeight: "bold" }}>
              Basic Mask
            </Text>
          </View>
        }
      >
        <View style={{ flex: 1, height: "100%", backgroundColor: "#324376" }} />
        <View style={{ flex: 1, height: "100%", backgroundColor: "#F5DD90" }} />
        <View style={{ flex: 1, height: "100%", backgroundColor: "#F76C5E" }} />
      </MaskedViewIOS>
    );
  }
}
