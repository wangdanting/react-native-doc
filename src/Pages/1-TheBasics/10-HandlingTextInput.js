import React, { PureComponent } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default class HandlingTextInput extends PureComponent {
  state = {
    text: ""
  };

  handleChange = text => {
    this.setState({
      text
    });
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={this.handleChange}
        />
        <Text>
          {text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  textInput: {
    height: 60
  }
});
