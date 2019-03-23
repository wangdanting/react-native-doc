import React, { PureComponent } from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import Extension from "./2-extension";

const ComponentIOS = () => <Text>ios</Text>;
const ComponentAndroid = () => <Text>android</Text>;

export default class PlatformDom extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Platform</Text>
        {Platform.select({
          ios: <ComponentIOS />,
          android: <ComponentAndroid />
        })}
        <Text>{Platform.Version}</Text>
        <Extension />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "red" : "green"
  },
  text: {
    ...Platform.select({
      ios: {
        color: "green"
      },
      android: {
        color: "red"
      }
    })
  }
});
