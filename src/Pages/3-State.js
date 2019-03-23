import React, { PureComponent } from "react";
import { View, Text } from "react-native";

let interval = null;

class Blink extends PureComponent {
  state = {
    isShow: true
  };

  componentDidMount() {
    interval = setInterval(() => this.handleChange(), 1000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  handleChange = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }));
  };

  render() {
    const { isShow } = this.state;
    return isShow ? (
      <View>
        <Text>I like to blink</Text>
        <Text>I like to blink</Text>
        <Text>I like to blink</Text>
        <Text>I like to blink</Text>
        <Text>I like to blink</Text>
      </View>
    ) : null;
  }
}

export default Blink;
