import React, { PureComponent } from "react";
import {
  SafeAreaView,
  Button,
  Image,
  CameraRoll,
  ScrollView
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";

//https://github.com/ivpusic/react-native-image-crop-picker

class CameraRollDemo extends PureComponent {
  state = {
    photos: ""
  };

  handleButtonPress = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      this.setState({
        photos: image.path
      });
    });
  };

  render() {
    const { photos } = this.state;
    return (
      <SafeAreaView>
        <Button title="Load Images" onPress={this.handleButtonPress} />
        {/* <Image
          style={{
            width: 300,
            height: 400
          }}
          source={{ uri: photos }}
        /> */}
      </SafeAreaView>
    );
  }
}

export default CameraRollDemo;
