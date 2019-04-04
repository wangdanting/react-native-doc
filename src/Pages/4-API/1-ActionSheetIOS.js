import React, { PureComponent } from "react";
import { View, Text, Button, ActionSheetIOS, SafeAreaView } from "react-native";

class ActionSheetIOSDemo extends PureComponent {
  showActionSheetWithOptions = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["取消", "删除"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        console.log(buttonIndex, "buttonIndex");
        // if (buttonIndex === 1) {
        // }
      }
    );
  };

  showShareActionSheetWithOptions = () => {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        url: "https://github.com/facebook/react-native",
        message: "你是猪你是猪"
      },
      failureCallback => {
        console.log(failureCallback, "failureCallback");
      },
      (bool, string) => {
        console.log(bool, "bool");
        console.log(string, "string");
      }
    );
  };

  render() {
    return (
      <SafeAreaView>
        <Text>dd</Text>
        <Button
          onPress={this.showActionSheetWithOptions}
          title="showActionSheetWithOptions"
        />
        <Button
          onPress={this.showShareActionSheetWithOptions}
          title="showShareActionSheetWithOptions"
        />
      </SafeAreaView>
    );
  }
}

export default ActionSheetIOSDemo;
