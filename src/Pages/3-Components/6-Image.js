import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class ImageDemo extends PureComponent {
  onLayout = a => {
    console.log(a, "a");
  };
  onLoad = b => {
    console.log(b, "b");
  };
  onLoadEnd = c => {
    console.log(c, "c");
  };
  onLoadStart = d => {
    console.log(d, "d");
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("../../common/kevin.jpg")}
          style={styles.img}
          onLayout={this.onLayout}
          onLoad={this.onLoad}
          onLoadEnd={this.onLoadEnd}
          onLoadStart={this.onLoadStart}
        />
        <Image
          style={{ width: 50, height: 100 }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/f7avicon.png"
          }}
          // loadingIndicatorSource={require("../../common/kevin.jpg")}
          defaultSource={require("../../common/kevin.jpg")}
          resizeMode="center"
          onPartialLoad={true}
          fadeDuration={500}
        />
        <Image
          style={{ width: 66, height: 58 }}
          source={{
            uri:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 50,
    backfaceVisibility: "hidden"
    // opacity: 0.5,
    // tintColor: "rgba(0, 0, 0, .1)"
  }
});
