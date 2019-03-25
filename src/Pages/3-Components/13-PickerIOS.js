import React, { PureComponent } from "react";
import { PickerIOS, Platform } from "react-native";
const { Item } = PickerIOS;

export default class PickerIOSDemo extends PureComponent {
  state = {
    language: "java"
  };

  handleChange = text => {
    this.setState({
      language: text
    });
  };

  render() {
    const { language } = this.state;
    return Platform.OS === "ios" ? (
      <PickerIOS
        selectedValue={language}
        onValueChange={this.handleChange}
        mode="dropdown"
      >
        <Item label="Java" value="java" />
        <Item label="JavaScript" value="js" />
        <Item label="php" value="php" />
        <Item label="python" value="python" />
      </PickerIOS>
    ) : null;
  }
}
