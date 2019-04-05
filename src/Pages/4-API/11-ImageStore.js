import React, { PureComponent } from "react";
import { SafeAreaView, ImageStore, ImageEditor, Button } from "react-native";

class ImageStoreDemo extends PureComponent {
  state = {
    image: ""
  };

  handle = () => {
    ImageEditor.cropImage(
      "http://www.jiabangou.com/static/img/zhaochi/1.jpg",
      {
        offset: { x: 50, y: 50 },
        size: { width: 50, height: 50 },
        displaySize: { width: 50, height: 50 },
        resizeMode: "contain"
      },
      image => {
        console.log(image, "success");
        this.setState({
          image
        });
      },
      failure => {
        console.log(failure, "failure");
      }
    );
  };

  hasImageForTag = () => {
    const { image } = this.state;
    ImageStore.hasImageForTag(image, call => {
      console.log(call, "call");
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.handle} title="cropImage" />
        <Button onPress={this.hasImageForTag} title="hasImageForTag" />
      </SafeAreaView>
    );
  }
}

export default ImageStoreDemo;
