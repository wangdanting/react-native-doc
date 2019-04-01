import React, { PureComponent } from "react";
import { View, Text, SegmentedControlIOS } from "react-native";

class SegmentedControlIOSDemo extends PureComponent {
  state = {
    selectedIndex: 0
  };

  handleChange = e => {
    this.setState({
      selectedIndex: e.nativeEvent.selectedSegmentIndex
    });
  };

  onValueChange = e => {
    console.log(e, "e");
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <>
        <View>
          <Text style={{ fontSize: 150 }}>dddd</Text>
        </View>
        <SegmentedControlIOS
          values={["One", "Two"]}
          // enabled={false}
          selectedIndex={selectedIndex}
          onChange={this.handleChange}
          // momentary={true}
          onValueChange={this.onValueChange}
          tintColor="red"
        />
      </>
    );
  }
}

export default SegmentedControlIOSDemo;
