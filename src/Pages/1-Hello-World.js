import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class HelloWorld extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontSize: 35
  }
});
