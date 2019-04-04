import React, { PureComponent } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ViewPager from "@react-native-community/viewpager";

class ViewPagerDemo extends PureComponent {
  render() {
    return (
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1">
          <Text style={styles.txt}>First page</Text>
          <Text style={styles.txt}>First page</Text>
          <Text style={styles.txt}>First page</Text>
          <Text style={styles.txt}>First page</Text>
          <Text style={styles.txt}>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: "center",
    padding: 20
  },
  txt: {
    fontSize: 150
  }
});

export default ViewPagerDemo;
