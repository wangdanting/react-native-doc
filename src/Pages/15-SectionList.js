import React, { PureComponent } from "react";
import { Text, View, SectionList, Image } from "react-native";

const data = [
  { title: "D", data: ["Devin"] },
  {
    title: "J",
    data: ["Jackson", "James", "Jillian", "Jimmy", "Joel", "John", "Julie"]
  }
];

export default class SectionListDom extends PureComponent {
  render() {
    return (
      <View>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          renderSectionHeader={({ section }) => (
            <Text
              style={{
                color: "red",
                fontSize: 50,
                backgroundColor: "rgba(247,247,247,1.0)"
              }}
            >
              {section.title}
            </Text>
          )}
          renderItem={({ item }) => (
            <Text style={{ lineHeight: 130, fontSize: 50 }}>{item}</Text>
          )}
        />
      </View>
    );
  }
}
