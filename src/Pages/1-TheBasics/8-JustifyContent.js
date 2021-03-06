import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

export default class JustifyContent extends PureComponent {
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
    flex: 1,
    // justifyContent: "flex-start",
    // justifyContent: "center",
    // justifyContent: "flex-end",
    // justifyContent: "space-around"
    // justifyContent: "space-between"
    justifyContent: "space-evenly"
  },
  item1: {
    width: 50,
    height: 50,
    backgroundColor: "powderblue"
  },
  item2: {
    width: 50,
    height: 50,
    backgroundColor: "skyblue"
  },
  item3: {
    width: 50,
    height: 50,
    backgroundColor: "steelblue"
  }
});
