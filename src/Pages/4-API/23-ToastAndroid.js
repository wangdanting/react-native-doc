import React, { PureComponent } from "react";
import { SafeAreaView, ToastAndroid, Button } from "react-native";

class ToastAndroidDemo extends PureComponent {
  show = () => {
    ToastAndroid.show("你是猪 !", ToastAndroid.SHORT);
  };

  showWithGravity = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  showWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.show} title="show" />
        <Button onPress={this.showWithGravity} title="showWithGravity" />
        <Button
          onPress={this.showWithGravityAndOffset}
          title="showWithGravityAndOffset"
        />
      </SafeAreaView>
    );
  }
}

export default ToastAndroidDemo;
