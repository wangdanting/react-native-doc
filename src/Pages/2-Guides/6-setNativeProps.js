import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";

export default class Demo extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = null;
  }

  clearText = () => {
    this.myRef.setNativeProps({ text: "" });
  };

  setMyRef = element => {
    this.myRef = element;
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput ref={this.setMyRef} placeholder="please input" />
        <TouchableOpacity onPress={this.clearText}>
          <Text>Clear text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
