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

class AuthScreen extends Component {
  static navigationOptions = {
    title: "验证"
  };
  render() {
    return (
      <SafeAreaView>
        <Text>AuthScreen</Text>
      </SafeAreaView>
    );
  }
}

const FeedStack = createStackNavigator({
  FeedHome: FeedScreen,
  Details: DetailsScreen
});

FeedStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const TabNavigator = createBottomTabNavigator({
  Feed: FeedStack,
  Profile: ProfileScreen
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
