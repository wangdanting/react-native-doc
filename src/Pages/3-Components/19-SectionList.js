import React, { PureComponent } from "react";
import { View, Text, SectionList, Button } from "react-native";

class SectionListDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = null;
  }

  setMyRef = element => {
    this.myRef = element;
  };

  onEndReached = () => {
    console.log("onEndReached");
  };

  onRefresh = () => {
    console.log("onRefresh");
  };

  toTop = () => {
    // this.myRef.scrollToLocation({ viewPosition: 0 });
  };

  render() {
    const sections = [
      { title: "title1", data: ["item1", "item2"] },
      { title: "Title2", data: ["item3", "item4"] },
      { title: "Title3", data: ["item5", "item6"] }
    ];

    const overrideRenderItem = ({ item, index, section: { title, data } }) => (
      <Text key={index}>Override{item}</Text>
    );

    const sections1 = [
      {
        title: "title1",
        data: ["item1", "item2"],
        renderItem: overrideRenderItem
      },
      { title: "Title2", data: ["item3", "item4"] },
      { title: "Title3", data: ["item5", "item6"] },
      { title: "Title4", data: ["item7", "item8"] },
      { title: "Title5", data: ["item9", "item10"] },
      { title: "Title6", data: ["item11", "item12"] }
    ];

    return (
      <>
        <SectionList
          sections={sections}
          renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          keyExtractor={(item, index) => item + index}
        />
        <SectionList
          ref={this.setMyRef}
          sections={sections1}
          renderItem={({ item, index }) => (
            <Text style={{ fontSize: 100 }} key={index}>
              {item}
            </Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={() => <Text>Separator</Text>}
          onEndReachedThreshold={50}
          onEndReached={this.onEndReached}
          // onRefresh={true}
          refreshing={true}
        />
        <Button onPress={this.toTop} title="to top" />
      </>
    );
  }
}

export default SectionListDemo;
