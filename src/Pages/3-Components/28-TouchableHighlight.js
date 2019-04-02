import React, { PureComponent } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet
} from "react-native";

class TouchableHighlightDemo extends PureComponent {
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
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
          activeOpacity={0.1}
          underlayColor="red"
        >
          <Text> Touch Here </Text>
        </TouchableHighlight>
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

export default TouchableHighlightDemo;
