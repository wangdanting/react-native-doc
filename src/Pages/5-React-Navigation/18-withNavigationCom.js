import React from "react";
import { Button } from "react-native";
import { withNavigation } from "react-navigation";

class MyBackButton extends React.Component {
  render() {
    console.log(this.props, "props");
    return (
      <Button
        title="Back"
        onPress={() => {
          this.props.navigation.goBack();
        }}
      />
    );
  }
}

export default withNavigation(MyBackButton);
