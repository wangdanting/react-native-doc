import React, { PureComponent } from "react";
import { SafeAreaView, Button, Share } from "react-native";

class ShareDemo extends PureComponent {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(result.activityType, "result.activityType");
        } else {
          console.log(result.action, "result.action");
          console.log(Share.sharedAction, "Share.sharedAction");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (err) {
      console.warn(err, "err");
    }
  };
  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.onShare} title="share" />
      </SafeAreaView>
    );
  }
}

export default ShareDemo;
