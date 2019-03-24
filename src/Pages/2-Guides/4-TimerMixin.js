import React, { PureComponent } from "react";
// import TimerMixin from "react-timer-mixin";
import { Text, View } from "react-native";

export default class TimerMixinDom extends PureComponent {
  state = {
    num: 0
  };
  componentDidMount() {
    // TimerMixin.setTimeout(() => {
    //   this.setState(prev => ({
    //     num: prev.num + 1
    //   }));
    // }, 1000);
  }

  render() {
    const { num } = this.state;
    return (
      <View>
        <Text>{num}</Text>
      </View>
    );
  }
}
