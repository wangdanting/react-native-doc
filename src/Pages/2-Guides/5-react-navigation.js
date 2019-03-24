import React, { PureComponent } from "react";
import { Button, View } from "react-native";

export default class ReactNavigation extends PureComponent {
  handleClick = () => {
    console.log("xx");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button title="点6我" onPress={this.handleClick} color="red" />
      </View>
    );
  }
}
