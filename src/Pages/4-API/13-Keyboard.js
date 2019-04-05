import React, { PureComponent } from "react";
import { SafeAreaView, Keyboard, TextInput } from "react-native";

class KeyboardDemo extends PureComponent {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    alert("Keyboard Shown");
  }

  _keyboardDidHide() {
    alert("Keyboard Hidden");
  }
  render() {
    return (
      <SafeAreaView>
        <TextInput
          placeholder="please input"
          onSubmitEditing={Keyboard.dismiss}
        />
      </SafeAreaView>
    );
  }
}

export default KeyboardDemo;
