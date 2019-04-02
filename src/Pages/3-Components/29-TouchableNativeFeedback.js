import React, { PureComponent } from "react";
import {
  SafeAreaView,
  TouchableNativeFeedback,
  Text,
  View
} from "react-native";

class TouchableNativeFeedbackDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <TouchableNativeFeedback>
          <View>
            <Text>button</Text>
          </View>
        </TouchableNativeFeedback>
      </SafeAreaView>
    );
  }
}

export default TouchableNativeFeedbackDemo;
