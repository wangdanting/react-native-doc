import React, { PureComponent } from "react";
import { View, Text, SafeAreaView } from "react-native";

class TextDemo extends PureComponent {
  onLayout = e => {
    console.log(e.nativeEvent, "onLayout");
  };

  onLongPress = e => {
    console.log(e, "onLongPress");
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Text</Text>
        <Text numberOfLines={1}>
          djsfs skdfsdfh kjsfhkjsdhf skjdhfsdjk kjsdhfksd jskdfhdks ksfjh kjdh
          ksdjfh kdfh skhfsdkf sfkjdh skdfh skdjfh ksdfh ksdhf skjfh skfh skfjh
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          I am bold
          <Text style={{ color: "red" }}>and red</Text>
        </Text>
        <Text selectable={true}>
          selectable true 决定用户是否可以长按选择文本，以便复制和粘贴
        </Text>
        <Text selectable={false}>
          selectable false 决定用户是否可以长按选择文本，以便复制和粘贴
        </Text>
        <Text ellipsizeMode="head" numberOfLines={1}>
          ellipsizeMode head 这个属性通常和下面的 numberOfLines
          属性配合使用，表示当 Text
          组件无法全部显示需要显示的字符串时如何用省略号进行修饰
        </Text>
        <Text ellipsizeMode="middle" numberOfLines={1}>
          ellipsizeMode middle 这个属性通常和下面的 numberOfLines
          属性配合使用，表示当 Text
          组件无法全部显示需要显示的字符串时如何用省略号进行修饰
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={1}>
          ellipsizeMode tail 这个属性通常和下面的 numberOfLines
          属性配合使用，表示当 Text
          组件无法全部显示需要显示的字符串时如何用省略号进行修饰
        </Text>
        <Text ellipsizeMode="clip" numberOfLines={1}>
          ellipsizeMode clip 这个属性通常和下面的 numberOfLines
          属性配合使用，表示当 Text
          组件无法全部显示需要显示的字符串时如何用省略号进行修饰
        </Text>
        <Text onLayout={this.onLayout}>
          onLayout 在加载时或者布局变化以后调用，参数为如下的内容
        </Text>
        <Text onLongPress={this.onLongPress}>
          onLongPress 当文本被长按以后调用此回调函数
        </Text>
      </SafeAreaView>
    );
  }
}

export default TextDemo;
