import React, { PureComponent } from "react";
import {
  DrawerLayoutAndroid,
  View,
  Text,
  Platform,
  TextInput,
  Button
} from "react-native";

export default class DrawerLayoutAndroidDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = null;
  }

  state = {
    text: ""
  };

  close = () => {
    this.setState({
      text: "close"
    });
  };

  open = () => {
    this.myRef.openDrawer();
  };

  setMyRef = element => {
    this.myRef = element;
  };

  render() {
    const { text } = this.state;
    const navigationView = (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
          I'm in the Drawer!
        </Text>
      </View>
    );

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {Platform.OS === "android" ? (
          <DrawerLayoutAndroid
            drawerWidth={300}
            keyboardDismissMode="on-drag"
            // drawerBackgroundColor="red"
            // statusBarBackgroundColor="red"
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}
            onDrawerClose={this.close}
            ref={this.setMyRef}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ margin: 10, fontSize: 15, textAlign: "right" }}>
                Hello{text}
              </Text>
              <Text style={{ margin: 10, fontSize: 15, textAlign: "right" }}>
                please slide top left
              </Text>
              <TextInput placeholder="please input" />
              <Button onPress={this.open} title="open" />
            </View>
          </DrawerLayoutAndroid>
        ) : null}
      </View>
    );
  }
}
