import React, { PureComponent } from "react";
import { ImageBackground, View, Text } from "react-native";

export default class ImageBackgroundDemo extends PureComponent {
  render() {
    return (
      <View style={{ width: 300, height: 300 }}>
        <ImageBackground
          source={require("../../common/kevin.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text>dfkkhskdfjhjdskhfkjsdf</Text>
          <Text>dfkkhskdfjhjdskhfkjsdf</Text>
          <Text>dfkkhskdfjhjdskhfkjsdf</Text>
          <Text>dfkkhskdfjhjdskhfkjsdf</Text>
          <Text>dfkkhskdfjhjdskhfkjsdf</Text>
          <Text>dfkkhskdfjhjdskhfkjsdf</Text>
        </ImageBackground>
      </View>
    );
  }
}
