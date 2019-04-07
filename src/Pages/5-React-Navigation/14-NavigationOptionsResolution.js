import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

class FeedScreen extends Component {
  static navigationOptions = {
    title: "喂食"
  };
  render() {
    return (
      <SafeAreaView>
        <Text>FeedScreen</Text>
      </SafeAreaView>
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "利益"
  };
  render() {
    return (
      <SafeAreaView>
        <Text>ProfileScreen</Text>
      </SafeAreaView>
    );
  }
}

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "设置"
  };
  render() {
    return (
      <SafeAreaView>
        <Text>SettingsScreen</Text>
      </SafeAreaView>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Feed: FeedScreen,
  Profile: ProfileScreen
});

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  console.log(routeName, "routeName");

  return {
    headerTitle
  };
};

// 可隐藏
// TabNavigator.navigationOptions = {
//   // Hide the header from AppNavigator stack
//   header: null
// };

const ABC = createStackNavigator({
  Home: TabNavigator,
  Settings: SettingsScreen
});

const AppContainer = createAppContainer(ABC);

export default AppContainer;
