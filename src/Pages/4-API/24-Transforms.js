import React, { PureComponent } from "react";
import { SafeAreaView, StyleSheet, View, Transforms } from "react-native";

class TransformsDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.item} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    transform: [{ rotateX: "45deg" }, { rotateZ: "0.785398rad" }]
  }
});

export default TransformsDemo;
