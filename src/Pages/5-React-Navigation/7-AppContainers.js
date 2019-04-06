import React, { Component } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

class HomeScreen extends Component {
  goDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>HomeScreen</Text>
        <Button onPress={this.goDetails} title="go details" />
      </SafeAreaView>
    );
  }
}

class DetailsScreen extends Component {
  goDetailsNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };

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
        <Button onPress={this.goDetailsNavigate} title="go details navigate" />
        <Button onPress={this.goBack} title="go back" />
      </SafeAreaView>
    );
  }
}

const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
