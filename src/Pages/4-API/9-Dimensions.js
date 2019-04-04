import React, { PureComponent } from "react";
import { SafeAreaView, Button, Dimensions } from "react-native";

class DimensionsDemo extends PureComponent {
  get = () => {
    const { height, width } = Dimensions.get("window");
    console.log(height, "height");
    console.log(width, "width");
  };
  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.get} title="get" />
      </SafeAreaView>
    );
  }
}

export default DimensionsDemo;
