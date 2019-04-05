import React, { PureComponent } from "react";
import { SafeAreaView, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";

class NetInfoDemo extends PureComponent {
  componentDidMount() {
    NetInfo.addEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log("Connection type", connectionInfo.type);
      console.log("Connection effective type", connectionInfo.effectiveType);
    });

    NetInfo.isConnected.fetch().then(isConnected => {
      console.log("First, is " + (isConnected ? "online" : "offline"));
    });
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );
  }

  handleFirstConnectivityChange = connectionInfo => {
    console.log(`First change, type: ${connectionInfo.type}`);
    console.log(`effectiveType: ${connectionInfo.effectiveType}`);
  };

  render() {
    return (
      <SafeAreaView>
        <Text>ddd</Text>
      </SafeAreaView>
    );
  }
}

export default NetInfoDemo;
