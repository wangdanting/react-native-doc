import React, { Component } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

class HomeScreen extends Component {
  goDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details", {
      itemId: 86,
      otherParam: "adfdfd"
    });
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
  componentDidMount() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "some default value");
    const defaulta = navigation.getParam("default", "some default value");
    console.log(itemId, "itemId");
    console.log(otherParam, "otherParam");
    console.log(defaulta, "default");
    console.log(navigation.state.params, "navigation.state.params");
  }

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
