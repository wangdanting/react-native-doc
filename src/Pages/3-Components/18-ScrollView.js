import React, { PureComponent } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button
} from "react-native";

export default class ScrollViewDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = null;
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    console.log(contentWidth, "contentWidth");
    console.log(contentHeight, "contentHeight");
  };

  onMomentumScrollBegin = () => {
    console.log("onMomentumScrollBegin");
  };

  onMomentumScrollEnd = () => {
    console.log("onMomentumScrollEnd");
  };

  onScroll = () => {
    console.log("onScroll");
  };

  onScrollBeginDrag = () => {
    console.log("onScrollBeginDrag");
  };

  onScrollEndDrag = () => {
    console.log("onScrollEndDrag");
  };

  setMyRef = element => {
    this.myRef = element;
  };

  toTop = () => {
    this.myRef.scrollTo({ x: 0, y: 0, animated: true });
  };

  toEnd = () => {
    this.myRef.scrollToEnd({ animated: true });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          ref={this.setMyRef}
          alwaysBounceVertical={true}
          contentContainerStyle={styles.contentContainer}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="never"
          onContentSizeChange={this.onContentSizeChange}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          onScroll={this.onScroll}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag}
          // scrollEnabled={false}
          // horizontal={true}
          // showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          stickyHeaderIndices={[1]}
          endFillColor="red"
          overScrollMode="never"
          centerContent={true}
          indicatorStyle="white"
        >
          <View>
            <TextInput placeholder="please input" />
          </View>
          <Button onPress={this.toEnd} title="to End" />
          <View>
            <Text style={{ fontSize: 100 }}>1</Text>
          </View>
          <View>
            <Text style={{ fontSize: 100 }}>2</Text>
          </View>
          <View>
            <Text style={{ fontSize: 100 }}>3</Text>
          </View>
          <View>
            <Text style={{ fontSize: 100 }}>4</Text>
          </View>
          <View>
            <Text style={{ fontSize: 100 }}>5</Text>
          </View>
          <View>
            <Text style={{ fontSize: 100 }}>6</Text>
          </View>
          <View>
            <Text style={{ fontSize: 100 }}>7</Text>
          </View>
          <View>
            <Text style={{ fontSize: 100 }}>8</Text>
          </View>
          <Button onPress={this.toTop} title="to top" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 50
  }
});
