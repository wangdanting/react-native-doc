import React, { PureComponent } from "react";
import { SafeAreaView, Vibration, Button } from "react-native";

const DURATION = 3000;
const PATTERN = [1000, 2000, 3000];

class VibrationDemo extends PureComponent {
  vibrate = () => {
    Vibration.vibrate(DURATION);
  };

  PATTERN = () => {
    Vibration.vibrate(PATTERN);
  };

  PATTERNTrue = () => {
    Vibration.vibrate(PATTERN, true);

    setTimeout(() => {
      Vibration.cancel();
    }, 10000);
  };

  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.vibrate} title="vibrate" />
        <Button onPress={this.PATTERN} title="PATTERN" />
        <Button onPress={this.PATTERNTrue} title="PATTERN True" />
      </SafeAreaView>
    );
  }
}

export default VibrationDemo;
