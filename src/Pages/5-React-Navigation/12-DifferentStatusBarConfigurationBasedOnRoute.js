import React, { PureComponent } from "react";
import { SafeAreaView, StatusBar, Text, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

class Screen1 extends PureComponent {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6a51ae"
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={{ color: "#fff" }}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate("Screen2")}
        />
      </SafeAreaView>
    );
  }
}

class Screen2 extends PureComponent {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ecf0f1"
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <Text>Dark Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate("Screen1")}
        />
      </SafeAreaView>
    );
  }
}

const AppNavigation = createStackNavigator(
  {
    Screen1: Screen1,
    Screen2: Screen2
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigation);
export default AppContainer;
