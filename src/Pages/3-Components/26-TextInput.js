import React, { PureComponent } from "react";
import { SafeAreaView, TextInput, View, Button } from "react-native";

class TextInputDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = null;
  }

  state = {
    text: ""
  };

  setMyRef = element => {
    this.myRef = element;
  };

  onChangeText = text => {
    this.setState({
      text
    });
  };

  onBlur = text => {
    console.log(text, "onBlur");
  };

  onContentSizeChange = e => {
    console.log(e.nativeEvent, "onContentSizeChange");
  };

  onEndEditing = text => {
    console.log(text, "onEndEditing");
  };

  onFocus = e => {
    console.log(e.nativeEvent, "onFocus");
  };

  onKeyPress = e => {
    console.log(e.nativeEvent, "onKeyPress");
  };

  clear = () => {
    this.myRef.clear();
  };

  isFocused = () => {
    const isFocused = this.myRef.isFocused();
    console.log(isFocused, "isFocused");
  };

  render() {
    const { text } = this.state;
    return (
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "white",
            borderBottomColor: "green",
            borderBottomWidth: 1
          }}
        >
          <TextInput
            ref={this.setMyRef}
            placeholder="please input"
            value={text}
            onChangeText={this.onChangeText}
            // multiline={true}
            numberOfLines={2}
            autoCapitalize="none"
            autoComplete="off"
            // autoFocus={true}
            // caretHidden={true}
            clearButtonMode="always"
            // clearTextOnFocus={true}
            // dataDetectorTypes="phoneNumber"
            // editable={false}
            // inlineImageLeft="search_icon"
            // keyboardType="number-pad"
            maxLength={100}
            onBlur={this.onBlur}
            onContentSizeChange={this.onContentSizeChange}
            onEndEditing={this.onEndEditing}
            onFocus={this.onFocus}
            onKeyPress={this.onKeyPress}
            placeholderTextColor="red"
            secureTextEntry={true}
            selectionColor="yellow"
            selectTextOnFocus={true}
          />
        </View>
        <Button onPress={this.clear} title="clear" />
        <Button onPress={this.isFocused} title="isFocused" />
      </SafeAreaView>
    );
  }
}

export default TextInputDemo;
