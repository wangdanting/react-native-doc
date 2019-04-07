import React, { Component } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

class FeedScreen extends Component {
  static navigationOptions = {
    title: "喂食"
  };
  render() {
    return (
      <SafeAreaView>
        <Text>FeedScreen</Text>
        <Button
          title="go detail"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </SafeAreaView>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = {
    title: "详情"
  };
  render() {
    return (
      <SafeAreaView>
        <Text>DetailsScreen</Text>
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

const FeedStack = createStackNavigator({
  FeedHome: FeedScreen
});

const TabNavigator = createBottomTabNavigator({
  Feed: FeedStack,
  Profile: ProfileScreen
});

const HomeStack = createStackNavigator(
  {
    Tabs: TabNavigator,
    Details: DetailsScreen
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
