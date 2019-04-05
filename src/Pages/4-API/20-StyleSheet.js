import React, { PureComponent } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

class StyleSheetDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.item1} />
        <View style={styles.item2} />
        <View style={styles.wrapper} />
      </SafeAreaView>
    );
  }
}

const abc = StyleSheet.create({
  item: {
    backgroundColor: "green"
  }
});

const styles = StyleSheet.create({
  item1: {
    ...abc.item,
    width: 100,
    height: 100,
    borderWidth: 1
  },
  item2: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderWidth: StyleSheet.hairlineWidth
  },
  wrapper: {
    ...StyleSheet.absoluteFill,
    top: 10,
    width: 100,
    height: 100,
    backgroundColor: "red"
  }
});

export default StyleSheetDemo;
