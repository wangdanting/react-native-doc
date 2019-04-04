import React, { PureComponent } from "react";
import { SafeAreaView, Text, AppState } from "react-native";

class AppStateDemo extends PureComponent {
  state = {
    appState: AppState.currentState
  };

  componentDidMount() {
    AppState.addEventListener("change", this.handleChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleChange);
  }

  handleChange = nextAppState => {
    console.log(nextAppState, "nextAppState");
    this.setState({
      appState: nextAppState
    });
  };

  render() {
    const { appState } = this.state;
    return (
      <SafeAreaView>
        <Text>{appState}</Text>
      </SafeAreaView>
    );
  }
}

export default AppStateDemo;
