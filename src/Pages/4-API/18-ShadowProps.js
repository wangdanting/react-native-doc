import React, { PureComponent } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

class ShadowPropsDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.item} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    width: 100,
    height: 100,
    borderWidth: 1,
    shadowColor: "red",
    shadowOffset: {
      width: 20,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 50
  }
});

export default ShadowPropsDemo;
