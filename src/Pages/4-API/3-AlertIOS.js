import React, { PureComponent } from "react";
import { SafeAreaView, Button, AlertIOS } from "react-native";

class AlertIOSDemo extends PureComponent {
  showAlert = () => {
    AlertIOS.alert("Sync Complete", "All your data are belong to us");
  };

  showPrompt = () => {
    AlertIOS.prompt("Enter a value", null, text =>
      console.log("You entered " + text)
    );
  };

  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.showAlert} title="alert" />
        <Button onPress={this.showPrompt} title="prompt" />
      </SafeAreaView>
    );
  }
}

export default AlertIOSDemo;
