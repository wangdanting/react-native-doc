import React, { PureComponent } from "react";
import { SafeAreaView, TimePickerAndroid, Button } from "react-native";

class TimePickerAndroidDemo extends PureComponent {
  open = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        console.log(action, "action");
        console.log(hour, "hour");
        console.log(minute, "minute");
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  };
  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.open} title="open" />
      </SafeAreaView>
    );
  }
}

export default TimePickerAndroidDemo;
