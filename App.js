import React, { Component } from "react";
import { Platform, Text, SafeAreaView } from "react-native";

import AppContainer from "./src/Pages/5-React-Navigation/10-DrawerNavigation";

export default class App extends React.Component {
  handleNavigationChange = (prevState, newState, action) => {
    console.log(prevState, "prevState");
    console.log(newState, "newState");
    console.log(action, "action");
  };

  render() {
    return (
      // <AppContainer onNavigationStateChange={this.handleNavigationChange} />
      <AppContainer />
    );
  }
}
