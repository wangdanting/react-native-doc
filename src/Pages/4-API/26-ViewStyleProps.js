import React, { PureComponent } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

class ViewStylePropsDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.constainer}>
        <View style={styles.item} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    borderWidth: StyleSheet.hairlineWidth,
    borderRightColor: "red",
    backfaceVisibility: "visible",
    borderBottomEndRadius: 50,
    opacity: 0.5
  }
});

export default ViewStylePropsDemo;
