import React, { PureComponent } from "react";
import { SafeAreaView, Switch } from "react-native";

class SwitchDemo extends PureComponent {
  state = {
    value: false
  };

  onValueChange = value => {
    this.setState({
      value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <SafeAreaView>
        <Switch
          onValueChange={this.onValueChange}
          value={value}
          // disabled
          trackColor={{
            false: "red",
            true: "yellow"
          }}
          ios_backgroundColor="green"
          thumbColor="pink"
        />
      </SafeAreaView>
    );
  }
}

export default SwitchDemo;
