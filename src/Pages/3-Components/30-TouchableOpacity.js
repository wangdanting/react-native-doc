import React, { PureComponent } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class TouchableOpacityDemo extends PureComponent {
  state = {
    count: 0
  };

  onPress = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
          activeOpacity={0.5}
        >
          <Text> Touch Here </Text>
        </TouchableOpacity>
        <View>
          <Text>{count}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 10
  }
});

export default TouchableOpacityDemo;
