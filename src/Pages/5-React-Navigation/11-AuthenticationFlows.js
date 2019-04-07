import React, { PureComponent } from "react";
import {
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  AsyncStorage,
  Button,
  Text
} from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

class AuthLoadingScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem("userToken");
    navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </SafeAreaView>
    );
  }
}

class SignInScreen extends PureComponent {
  signInAsync = async () => {
    const { navigation } = this.props;
    await AsyncStorage.setItem("userToken", "abc");
    navigation.navigate("App");
  };

  render() {
    return (
      <SafeAreaView>
        <Button title="Sign in!" onPress={this.signInAsync} />
      </SafeAreaView>
    );
  }
}

class HomeScreen extends PureComponent {
  showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "red" }}>
        <Button title="Show me more of the app" onPress={this.showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
      </SafeAreaView>
    );
  }
}

class OtherScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <Text>OtherScreen</Text>
      </SafeAreaView>
    );
  }
}

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default AppContainer;
