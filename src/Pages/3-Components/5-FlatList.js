import React, { PureComponent } from "react";
import { FlatList, View, TouchableOpacity, Text, Button } from "react-native";

class MyListItem extends PureComponent {
  handleClick = () => {
    const { handleChange, id } = this.props;
    handleChange(id);
  };
  render() {
    const { selected, title } = this.props;
    const textColor = selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this.handleClick}>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text style={{ color: textColor, fontSize: 30 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class FlatListDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = null;
  }

  state = {
    selected: new Map(),
    data: [
      {
        id: "1",
        title: "shfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs1"
      },
      {
        id: "2",
        title: "shfddfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs2"
      },
      {
        id: "3",
        title: "shfddfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs3"
      },
      {
        id: "4",
        title: "shfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs4"
      },
      {
        id: "5",
        title: "shfddfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs5"
      },
      {
        id: "6",
        title: "shfddfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs6"
      },
      {
        id: "7",
        title: "shfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs7"
      },
      {
        id: "8",
        title: "shfddfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs8"
      },
      {
        id: "9",
        title: "shfddfskhfksjhfksjhfdkshfksjhfkshfkshfksjglaksjhfs9"
      }
    ]
  };

  keyExtractor = item => item.id;

  handleChange = id => {
    this.setState(prevState => {
      const selected = new Map(prevState.selected);
      selected.set(id, !selected.get(id));
      return { selected };
    });
  };

  renderItem = ({ item }) => {
    const { selected } = this.state;
    return (
      <MyListItem
        id={item.id}
        title={item.title}
        handleChange={this.handleChange}
        selected={!!selected.get(item.id)}
      />
    );
  };

  setSeparator = () => <Text>separator</Text>;

  setEmpty = () => <Text>empty</Text>;

  setFooter = () => <Text>footer</Text>;

  setHeader = () => <Text>header</Text>;

  onEndReached = info => {
    console.log(info, "info");
  };

  onRefresh = () => {
    console.log("xx");
  };

  setMyRef = element => {
    this.myRef = element;
  };

  scrollToEnd = () => {
    // this.myRef.scrollToEnd();
    this.myRef.scrollToIndex({ viewPosition: 0.1 });
  };

  render() {
    const { data, selected } = this.state;
    const ITEM_HEIGHT = 100;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button onPress={this.scrollToEnd} title="scroll to end" />
        <FlatList
          data={data}
          extraData={selected}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.setSeparator}
          ListEmptyComponent={this.setEmpty}
          ListFooterComponent={this.setFooter}
          ListHeaderComponent={this.setHeader}
          // getItemLayout={(data, index) => ({
          //   length: ITEM_HEIGHT,
          //   offset: ITEM_HEIGHT * index,
          //   index
          // })}
          // horizontal={true}
          // initialScrollIndex={3}
          // inverted={true}
          // numColumns={2}
          onEndReachedThreshold={10}
          onEndReached={this.onEndReached}
          refreshing={true}
          onRefresh={this.onRefresh}
          progressViewOffset={20}
          ref={this.setMyRef}
        />
      </View>
    );
  }
}
