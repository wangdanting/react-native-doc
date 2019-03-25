import React, { PureComponent } from "react";
import { ProgressBarAndroid, View } from "react-native";

export default class ProgressBarAndroidDemo extends PureComponent {
  render() {
    return (
      <View>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="red" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
        <ProgressBarAndroid styleAttr="Small" />
        <ProgressBarAndroid styleAttr="Large" />
        <ProgressBarAndroid styleAttr="Inverse" />
        <ProgressBarAndroid styleAttr="SmallInverse" />
        <ProgressBarAndroid styleAttr="LargeInverse" />
      </View>
    );
  }
}
