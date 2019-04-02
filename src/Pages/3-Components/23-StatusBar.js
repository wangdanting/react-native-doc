import React, { PureComponent } from "react";
import { View, Text, StatusBar, SafeAreaView, Button } from "react-native";

class StatusBarDemo extends PureComponent {
  setHidden = () => {
    StatusBar.setHidden(true);
  };

  setBarStyle = () => {
    StatusBar.setBarStyle("dark-content", true);
  };

  setNetworkActivityIndicatorVisible = () => {
    StatusBar.setNetworkActivityIndicatorVisible(false);
  };

  setBackgroundColor = () => {
    StatusBar.setBackgroundColor("red", true);
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={{ fontSize: 50 }}>StatusBar</Text>
        </View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          animated={true}
          // hidden={true}
          // translucent={true}
        />
        <Button onPress={this.setHidden} title="set hidden" />
        <Button onPress={this.setBarStyle} title="setBarStyle" />
        <Button
          onPress={this.setNetworkActivityIndicatorVisible}
          title="setNetworkActivityIndicatorVisible"
        />
        <Button onPress={this.setBackgroundColor} title="setBackgroundColor" />
      </SafeAreaView>
    );
  }
}

export default StatusBarDemo;
