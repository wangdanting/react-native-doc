import React, { PureComponent } from "react";
import { SafeAreaView, DatePickerAndroid, Button } from "react-native";

class DatePickerAndroidDemo extends PureComponent {
  handle = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        minDate: new Date(2019, 4, 1),
        maxDate: new Date(2019, 4, 15)
      });
      console.log(action, "action");
      console.log(year, "year");
      console.log(month, "month");
      console.log(day, "day");
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.handle} title="DatePickerAndroid" />
      </SafeAreaView>
    );
  }
}

export default DatePickerAndroidDemo;
