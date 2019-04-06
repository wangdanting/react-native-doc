import React from "react";
import { Text, SafeAreaView, Button } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

class HomeScreen extends React.Component {
  goSetting = () => {
    const { navigation } = this.props;
    navigation.navigate("Settings");
  };

  goDetail = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Home!</Text>
        <Button onPress={this.goDetail} title="go detail" />
        <Button onPress={this.goSetting} title="go setting" />
      </SafeAreaView>
    );
  }
}

class DetailsScreen extends React.Component {
  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>DetailsScreen</Text>
        <Button onPress={this.goBack} title="go back" />
      </SafeAreaView>
    );
  }
}

class SettingsScreen extends React.Component {
  goDetail = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Settings!</Text>
        <Button onPress={this.goDetail} title="go detail" />
      </SafeAreaView>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

// 找锦江兄 https://www.npmjs.com/package/react-native-vector-icons

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack
  },
  {
    // defaultNavigationOptions: ({navigation}) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //   }
    // })
  }
);

export default createAppContainer(TabNavigator);
