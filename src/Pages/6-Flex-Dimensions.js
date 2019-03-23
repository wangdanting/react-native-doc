import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

export default class FlexDimensions extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1} />
        <View style={styles.item2} />
        <View style={styles.item3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item1: {
    flex: 1,
    backgroundColor: "powderblue"
  },
  item2: {
    flex: 2,
    backgroundColor: "skyblue"
  },
  item3: {
    flex: 3,
    backgroundColor: "steelblue"
  }
});
