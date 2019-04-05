import React, { PureComponent } from "react";
import { SafeAreaView, PixelRatio } from "react-native";

class PixelRatioDemo extends PureComponent {
  componentDidMount() {
    const get = PixelRatio.get();
    console.log(get, "get");
  }
  render() {
    return <SafeAreaView />;
  }
}

export default PixelRatioDemo;
