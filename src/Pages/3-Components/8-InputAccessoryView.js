import React, { PureComponent } from "react";
import {
  View,
  ScrollView,
  InputAccessoryView,
  TextInput,
  Button
} from "react-native";

export default class UselessTextInput extends PureComponent {
  state = { text: "Placeholder Text" };

  handleChange = text => {
    this.setState({
      text
    });
  };

  reset = () => {
    this.setState({ text: "Placeholder Text" });
  };

  render() {
    const { text } = this.state;
    const inputAccessoryViewID = "uniqueID";
    return (
      <View>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            style={{ marginTop: 40 }}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={this.handleChange}
            value={text}
          />
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button onPress={this.reset} title="reset txt" />
        </InputAccessoryView>
      </View>
    );
  }
}
