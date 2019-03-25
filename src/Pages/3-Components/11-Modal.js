import React, { PureComponent } from "react";
import { Modal, View, Text, Button } from "react-native";

export default class ModalDemo extends PureComponent {
  state = {
    visible: false
  };

  setModal = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  disableBackHandler = () => {
    console.log("xx");
  };

  onShow = () => {
    console.log("onshow");
  };

  onDismiss = () => {
    console.log("onDismiss");
  };

  render() {
    const { visible } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Modal
          visible={visible}
          onRequestClose={this.disableBackHandler}
          onShow={this.onShow}
          onDismiss={this.onDismiss}
          transparent={true}
          animationType="slide"
        >
          <View style={{ backgroundColor: "red" }}>
            <Text>Hello Modal</Text>
            <Button
              onPress={this.setModal}
              title="click me"
              style={{ marginTop: 100 }}
            />
          </View>
        </Modal>
        <Button
          onPress={this.setModal}
          title="click3 me"
          color="red"
          style={{ marginTop: 30 }}
        />
      </View>
    );
  }
}
