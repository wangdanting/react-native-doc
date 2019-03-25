import React, { PureComponent } from "react";
import { DatePickerIOS, View } from "react-native";

export default class DatePickerIOSDemo extends PureComponent {
  state = {
    date: new Date()
  };

  handleChange = date => {
    console.log(date, "date");
    this.setState({
      date
    });
  };

  render() {
    const { date } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <DatePickerIOS
          date={date}
          onDateChange={this.handleChange}
          minimumDate={new Date("2019-03-24 17:00:00")}
          maximumDate={new Date("2019-03-24 18:00:00")}
          minuteInterval={10}
          mode="datetime"
        />
      </View>
    );
  }
}
