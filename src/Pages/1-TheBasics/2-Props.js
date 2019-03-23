import React, { PureComponent } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

class Greeting extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <View>
        <Text>Hello {name} </Text>
      </View>
    );
  }
}

class LotsOfGreetings extends PureComponent {
  render() {
    return (
      <View>
        <Greeting name="Alex" />
        <Greeting name="Blan" />
        <Greeting name="Cemi" />
      </View>
    );
  }
}

export default class Bananas extends PureComponent {
  render() {
    const pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View>
        <Image style={styles.img} source={pic} />
        <LotsOfGreetings />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 193,
    height: 110
  }
});
