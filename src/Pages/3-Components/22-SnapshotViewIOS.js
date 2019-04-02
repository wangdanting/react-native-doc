import React, { PureComponent } from "react";
import { View, Text, SnapshotViewIOS } from "react-native";

class SnapshotViewIOSDemo extends PureComponent {
  render() {
    return (
      <>
        <View>
          <Text style={{ fontSize: 50 }}>SnapshotViewIOS</Text>
        </View>
        <SnapshotViewIOS />
      </>
    );
  }
}

export default SnapshotViewIOSDemo;
