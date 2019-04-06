import React, { Component } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  goDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };

  goModal = () => {
    const { navigation } = this.props;
    navigation.navigate("MyModal");
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>HomeScreen</Text>
        <Button onPress={this.goDetails} title="go details" />
        <Button onPress={this.goModal} title="go modal" />
      </SafeAreaView>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = {
    title: "Details"
  };

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

class ModalScreen extends Component {
  static navigationOptions = {
    title: "Modal"
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
        <Text>ModalScreen</Text>
        <Button onPress={this.goBack} title="go back" />
      </SafeAreaView>
    );
  }
}

const MainStack = createStackNavigator({
  Home: HomeScreen
  // Details: DetailsScreen
});

const AppNavigation = createStackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen,
    Details: DetailsScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
