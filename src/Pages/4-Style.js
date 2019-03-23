import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class StyleDom extends PureComponent {
  render() {
    return (
      <View>
        <Text style={styles.red}>red</Text>
        <Text style={styles.blue}>blue</Text>
        <Text style={styles.green}>green</Text>
        <Text style={styles.purple}>purple</Text>
        <Text style={styles.orange}>orange</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: "red"
  },
  blue: {
    color: "blue"
  },
  green: {
    color: "green"
  },
  purple: {
    color: "purple"
  },
  orange: {
    color: "orange"
  }
});

export default StyleDom;
