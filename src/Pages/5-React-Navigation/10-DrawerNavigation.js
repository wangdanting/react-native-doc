import React, { Component } from "react";
import { Text, SafeAreaView, Button, Image } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../common/kevin.jpg")}
        style={{ width: 24, height: 24 }}
      />
    )
  };

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
  static navigationOptions = {
    drawerLabel: "Details",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../common/kevin.jpg")}
        style={{ width: 24, height: 24 }}
      />
    )
  };
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>DetailsScreen</Text>
      </SafeAreaView>
    );
  }
}

const AppNavigation = createDrawerNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
