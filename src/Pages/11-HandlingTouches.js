import React, { PureComponent } from "react";
import { Button, View } from "react-native";

export default class HandlingTouches extends PureComponent {
  handleClick = () => {
    console.log("xx");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button title="点我" onPress={this.handleClick} color="red" />
      </View>
    );
  }
}
