import React, { PureComponent } from "react";
import { View, Text, Slider } from "react-native";

class SliderDemo extends PureComponent {
  onSlidingComplete = e => {
    console.log(e, "onSlidingComplete");
  };

  onValueChange = e => {
    console.log(e, "onValueChange");
  };

  render() {
    return (
      <>
        <View>
          <Text style={{ fontSize: 120 }}>slider</Text>
        </View>
        <Slider
          maximumValue={0.5}
          minimumTrackTintColor="red"
          minimumValue={0.2}
          // disabled={true}
          onSlidingComplete={this.onSlidingComplete}
          onValueChange={this.onValueChange}
          step={0.2}
          maximumTrackTintColor="yellow"
          thumbTintColor="green"
        />
      </>
    );
  }
}

export default SliderDemo;
