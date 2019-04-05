import React, { PureComponent } from "react";
import { SafeAreaView, ImageEditor, Button } from "react-native";

import abc from "../../common/kevin.jpg";

class ImageEditorDemo extends PureComponent {
  handle = () => {
    ImageEditor.cropImage(
      "http://www.jiabangou.com/static/img/zhaochi/1.jpg",
      {
        offset: { x: 50, y: 50 },
        size: { width: 50, height: 50 },
        displaySize: { width: 50, height: 50 },
        resizeMode: "contain"
      },
      success => {
        console.log(success, "success");
      },
      failure => {
        console.log(failure, "failure");
      }
    );
  };
  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.handle} title="cropImage" />
      </SafeAreaView>
    );
  }
}

export default ImageEditorDemo;
