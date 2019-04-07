import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Settings</Text>
      </SafeAreaView>
    );
  }
}

const HomeStack = createStackNavigator(
  { Home },
  {
    defaultNavigationOptions: {
      title: "Home!1top"
    }
  }
);
const SettingsStack = createStackNavigator({ Settings });

HomeStack.navigationOptions = {
  tabBarLabel: "Home!tab"
};

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings!tab"
};

const AppContainer = createAppContainer(
  createBottomTabNavigator({
    HomeStack,
    SettingsStack
  })
);

export default AppContainer;
