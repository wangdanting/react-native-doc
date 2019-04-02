import React, { PureComponent } from "react";
import { SafeAreaView, ToolbarAndroid } from "react-native";

class ToolbarAndroidDemo extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <ToolbarAndroid
          logo={require("../../common/kevin.jpg")}
          title="AwesomeApp"
          actions={[
            {
              title: "Settings",
              icon: require("../../common/kevin.jpg"),
              show: "always"
            }
          ]}
        />
      </SafeAreaView>
    );
  }
}

export default ToolbarAndroidDemo;
