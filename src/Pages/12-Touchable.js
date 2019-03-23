import React, { PureComponent } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Text,
  View
} from "react-native";

export default class Touchable extends PureComponent {
  handleClick = () => {
    console.log("xx");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableHighlight onPress={this.handleClick}>
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handleClick} underlayColor="red">
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={this.handleClick}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this.handleClick}
          color="red"
          backgroundColor="red"
        >
          <Text>TouchableNativeFeedback</Text>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this.handleClick}>
          <Text>TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
