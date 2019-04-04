import React, { PureComponent } from "react";
import { View, Text, Button, Alert, SafeAreaView } from "react-native";

class AlertDemo extends PureComponent {
  showAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Button onPress={this.showAlert} title="alert" />
        </View>
      </SafeAreaView>
    );
  }
}

export default AlertDemo;
