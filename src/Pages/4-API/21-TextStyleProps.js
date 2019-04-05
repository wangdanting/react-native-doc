import React, { PureComponent } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

class StyleSheetDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.item}>你是猪你是猪你ddd</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    textShadowColor: "green",
    textShadowRadius: 50,
    textShadowOffset: {
      width: 10,
      height: 10
    },
    color: "red",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "900",
    textAlign: "center",
    textDecorationLine: "underline",
    textAlignVertical: "bottom",
    fontVariant: ["small-caps"],
    letterSpacing: 20,
    textDecorationColor: "#000",
    textDecorationStyle: "dotted",
    textTransform: "capitalize",
    writingDirection: "rtl"
  }
});

export default StyleSheetDemo;
