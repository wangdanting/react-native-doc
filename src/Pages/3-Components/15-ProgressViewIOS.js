import React, { PureComponent } from "react";
import { ProgressViewIOS, View } from "react-native";

export default class ProgressViewIOSDemo extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <ProgressBarAndroid />
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
        <ProgressBarAndroid styleAttr="LargeInverse" /> */}
        <ProgressViewIOS />
        <ProgressViewIOS progress={0.5} />
        <ProgressViewIOS
          progressImage={require("../../common/kevin.jpg")}
          progress={0.5}
        />
        <ProgressViewIOS progress={0.8} progressTintColor="red" />
        <ProgressViewIOS progress={0.5} progressViewStyle="bar" />
        <ProgressViewIOS
          progress={0.8}
          trackImage={require("../../common/kevin.jpg")}
        />
        <ProgressViewIOS progress={0.5} trackTintColor="red" />
      </View>
    );
  }
}
