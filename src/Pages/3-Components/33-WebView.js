import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

class WebViewDemo extends PureComponent {
  injectJavaScript = () => {
    console.log("xxxx");
  };

  onLoad = () => {
    console.log("onLoad");
  };

  onLoadEnd = () => {
    console.log("onLoadEnd");
  };

  onLoadStart = () => {
    console.log("onLoadStart");
  };

  onMessage = event => {
    console.log(event.nativeEvent.data, "event.nativeEvent.data");
  };

  render() {
    return (
      <WebView
        source={{ uri: "https://github.com/facebook/react-native" }}
        style={{ marginTop: 20 }}
        startInLoadingState={true}
      />
      // <WebView
      //   originWhitelist={["*"]}
      //   source={{ html: "<h1>Hello world</h1>" }}
      //   injectJavaScript={this.injectJavaScript}
      //   onLoad={this.onLoad}
      //   onLoadEnd={this.onLoadEnd}
      //   onLoadStart={this.onLoadStart}
      //   onMessage={this.onMessage}
      // />
    );
  }
}

export default WebViewDemo;
