import React, { PureComponent } from "react";
import { SafeAreaView, Text, Clipboard, Button } from "react-native";

class ClipboardDemo extends PureComponent {
  getString = async () => {
    var content = await Clipboard.getString();
    console.log(content, "content");
  };

  setString = () => {
    Clipboard.setString("hello world");
  };

  render() {
    return (
      <SafeAreaView>
        <Button
          onPress={this.setString}
          title="setString"
          style={{ marginTop: 30 }}
        />
        <Button
          onPress={this.getString}
          title="getString"
          style={{ marginTop: 30 }}
        />
      </SafeAreaView>
    );
  }
}

export default ClipboardDemo;
