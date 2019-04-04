import React, { PureComponent } from "react";
import { View, Text, SafeAreaView } from "react-native";

class ViewDemo extends PureComponent {
  onStartShouldSetResponder = e => {
    console.log(e, "onStartShouldSetResponder");
  };

  onLayout = e => {
    console.log(e, "onLayout");
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>xxx</Text>
        </View>
        <View onStartShouldSetResponder={this.onStartShouldSetResponder}>
          <Text>onStartShouldSetRestponder111122</Text>
        </View>
        <View onLayout={this.onLayout}>
          <Text>onLayout</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default ViewDemo;
