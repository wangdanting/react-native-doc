import React, { PureComponent } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

class LayoutPropsDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
          <Text>view1</Text>
        </View>
        <View style={styles.view2}>
          <Text>view2</Text>
        </View>
        <View style={styles.view3}>
          <Text>view3</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
    // alignItems: "center"
  },
  view1: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    alignSelf: "center",
    borderBottomWidth: 5,
    borderEndWidth: 3,
    borderStartWidth: 2
  },
  view2: {
    position: "absolute",
    width: 100,
    height: 50,
    backgroundColor: "yellow",
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 50,
    marginVertical: 30,
    paddingHorizontal: 20,
    zIndex: 2
  },
  view3: {
    position: "absolute",
    width: 100,
    height: 50,
    backgroundColor: "green",
    top: 100,
    zIndex: 1
  }
});

export default LayoutPropsDemo;
