import React, { Component } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "home",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="red"
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Details",
      headerRight: (
        <Button
          onPress={navigation.getParam("increaseCount")}
          title="+1"
          color="red"
        />
      )
    };
  };

  state = {
    count: 0
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ increaseCount: this.increaseCount });
  }

  increaseCount = () => {
    this.setState(prev => ({
      count: prev.count + 1
    }));
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
