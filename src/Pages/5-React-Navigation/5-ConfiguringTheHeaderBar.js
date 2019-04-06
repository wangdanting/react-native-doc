import React, { Component } from "react";
import { Text, SafeAreaView, Button, Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  goDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details", {
      name: "Details"
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
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions, "navigationOptions");
    return {
      title: navigation.getParam("name", "default title")
    };
  };

  goDetailsNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  updateTitle = () => {
    const { navigation } = this.props;
    navigation.setParams({ name: "Updated!" });
  };

  goThird = () => {
    const { navigation } = this.props;
    navigation.navigate("Third");
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>DetailsScreen</Text>
        <Button onPress={this.goDetailsNavigate} title="go details navigate" />
        <Button onPress={this.goBack} title="go back" />
        <Button onPress={this.updateTitle} title="Update the title" />
        <Button onPress={this.goThird} title="go Third" />
      </SafeAreaView>
    );
  }
}

class ThirdScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: (
      <Image
        source={require("../../common/kevin.jpg")}
        style={{ width: 30, height: 30 }}
      />
    )
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Third</Text>
      </SafeAreaView>
    );
  }
}

const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Third: ThirdScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
