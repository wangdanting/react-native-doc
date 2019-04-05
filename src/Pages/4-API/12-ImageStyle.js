import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class ImageStyleDemo extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image source={require("../../common/kevin.jpg")} style={styles.img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderTopRightRadius: 50,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "red",
    backfaceVisibility: "visible",
    opacity: 0.5
    // resizeMode: "stretch"
  }
});
