import React, { PureComponent } from "react";
import { Text, View, Image } from "react-native";

import img from "../../common/kevin.jpg";

export default class ImageDom extends PureComponent {
  render() {
    return (
      <View>
        <Image source={require("../../common/kevin.jpg")} />
        <View style={{ width: 100, height: 20, backgroundColor: "red" }} />
        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}
