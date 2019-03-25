import React, { PureComponent } from "react";
import { ActivityIndicator, View } from "react-native";

export default class ActivityIndicatorDemo extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" animating={false} />
        <ActivityIndicator
          size="large"
          color="#0000ff"
          animating={false}
          hidesWhenStopped={false}
        />
      </View>
    );
  }
}
