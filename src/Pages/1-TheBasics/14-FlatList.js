import React, { PureComponent } from "react";
import { Text, View, FlatList, Image } from "react-native";

const data = [
  { key: "Devin" },
  { key: "Jackson" },
  { key: "James" },
  { key: "Joel" },
  { key: "John" },
  { key: "Jillian" },
  { key: "Jimmy" },
  { key: "Julie" }
];

export default class FlatListDom extends PureComponent {
  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={{ lineHeight: 130, fontSize: 50 }}>{item.key}</Text>
          )}
        />
      </View>
    );
  }
}
