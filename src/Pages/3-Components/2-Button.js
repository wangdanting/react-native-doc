import React, { PureComponent } from "react";
import { Button, View } from "react-native";

export default class ButtonDemo extends PureComponent {
  abc = () => {
    console.log("abc");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          onPress={this.abc}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.abc}
          title="Learn More"
          color="#841584"
          disabled={true}
        />
        <View style={{ backgroundColor: "red" }}>
          <Button onPress={this.abc} title="Learn More" />
        </View>
      </View>
    );
  }
}
