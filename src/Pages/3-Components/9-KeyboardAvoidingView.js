import React, { PureComponent } from "react";
import { KeyboardAvoidingView, TextInput, View, Text } from "react-native";

export default class KeyboardAvoidingViewDemo extends PureComponent {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <TextInput placeholder="please input" style={{ marginTop: 100 }} />
        <View style={{ paddingTop: 200 }}>
          <Text>dsdfsdfsdfdfsdf</Text>
        </View>
        <View style={{ paddingTop: 200 }}>
          <Text>footer</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
