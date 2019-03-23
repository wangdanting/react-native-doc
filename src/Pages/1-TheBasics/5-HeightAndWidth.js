import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

class HeightAndWidth extends PureComponent {
  render() {
    return (
      <View>
        <View style={styles.blockSmall} />
        <View style={styles.blockDefault} />
        <View style={styles.blockLarge} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockSmall: {
    width: 50,
    height: 100,
    backgroundColor: "powderblue"
  },
  blockDefault: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue"
  },
  blockLarge: {
    width: 150,
    height: 150,
    backgroundColor: "steelblue"
  }
});

export default HeightAndWidth;
