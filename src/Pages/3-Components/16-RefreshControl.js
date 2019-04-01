import React, { PureComponent } from "react";
import { RefreshControl, ScrollView, View, Text } from "react-native";

export default class RefreshControlDemo extends PureComponent {
  state = {
    refreshing: false
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 5000);
  };

  render() {
    const { refreshing } = this.state;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.onRefresh}
            enabled={true}
            progressBackgroundColor="red"
            tintColor="red"
            title="加载中"
          />
        }
      >
        <View>
          <Text style={{ fontSize: 100 }}>1</Text>
          <Text style={{ fontSize: 100 }}>2</Text>
          <Text style={{ fontSize: 100 }}>3</Text>
          <Text style={{ fontSize: 100 }}>4</Text>
          <Text style={{ fontSize: 100 }}>5</Text>
          <Text style={{ fontSize: 100 }}>6</Text>
          <Text style={{ fontSize: 100 }}>7</Text>
          <Text style={{ fontSize: 100 }}>8</Text>
          <Text style={{ fontSize: 100 }}>9</Text>
          <Text style={{ fontSize: 100 }}>10</Text>
        </View>
      </ScrollView>
    );
  }
}
