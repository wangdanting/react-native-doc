import React, { PureComponent } from "react";
import {
  SafeAreaView,
  Button,
  Image,
  CameraRoll,
  ScrollView
} from "react-native";

class CameraRollDemo extends PureComponent {
  state = {
    photos: ""
  };

  // handleButtonPress = () => {
  //   CameraRoll.getPhotos({
  //     first: 20,
  //     assetType: "Photos"
  //   })
  //     .then(r => {
  //       this.setState({ photos: r.edges });
  //     })
  //     .catch(err => {
  //       //Error Loading Images
  //     });
  // };

  render() {
    return (
      <SafeAreaView>
        <Button title="Load Images" onPress={this.handleButtonPress} />
        {/* <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </ScrollView> */}
      </SafeAreaView>
    );
  }
}

export default CameraRollDemo;
