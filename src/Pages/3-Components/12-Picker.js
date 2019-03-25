import React, { PureComponent } from "react";
import { Picker } from "react-native";
const { Item } = Picker;

export default class PickerDemo extends PureComponent {
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
    return (
      <Picker
        selectedValue={language}
        onValueChange={this.handleChange}
        mode="dropdown"
        itemStyle={{
          color: "red"
        }}
      >
        <Item label="Java" value="java" />
        <Item label="JavaScript" value="js" />
        <Item label="php" value="php" />
        <Item label="python" value="python" />
      </Picker>
    );
  }
}
