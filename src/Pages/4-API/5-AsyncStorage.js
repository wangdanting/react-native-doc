import React, { PureComponent } from "react";
import { SafeAreaView, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const UID123_object = {
  name: "Chris",
  age: 30,
  traits: { hair: "brown", eyes: "brown" }
};

const UID123_delta = {
  age: 31,
  traits: { eyes: "blue", shoe_size: 10 }
};

class AsyncStorageDemo extends PureComponent {
  setItem = async () => {
    try {
      await AsyncStorage.setItem(
        "abc",
        JSON.stringify(UID123_object),
        this.callBack
      );
    } catch (error) {
      console.log(error, "error");
    }
  };

  mergeItem = async () => {
    try {
      await AsyncStorage.mergeItem(
        "abc",
        JSON.stringify(UID123_delta),
        this.callBack
      );
    } catch (error) {
      console.log(error, "error");
    }
  };

  getItem = async () => {
    try {
      await AsyncStorage.getItem("abc", this.callBack);
    } catch (error) {
      console.log(error, "error");
    }
  };

  removeItem = async () => {
    try {
      await AsyncStorage.removeItem("abc", this.callBack);
    } catch (error) {
      console.log(error, "error");
    }
  };

  clear = async () => {
    try {
      await AsyncStorage.clear(this.callBack);
    } catch (error) {
      console.log(error, "error");
    }
  };

  getAllKeys = async () => {
    try {
      await AsyncStorage.getAllKeys(this.callBack);
    } catch (error) {
      console.log(error, "error");
    }
  };

  multiGet = async () => {
    try {
      await AsyncStorage.multiGet(["abc", "abc1"], this.callBack);
    } catch (error) {
      console.log(error, "error");
    }
  };

  multiSet = async () => {
    try {
      await AsyncStorage.multiSet([["abc1", "value2"]], this.callBack);
    } catch (error) {
      console.log(error, "error");
    }
  };

  multiRemove = async () => {
    try {
      await AsyncStorage.multiRemove(["abc1"]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  callBack = (err, string) => {
    console.log(err, "err");
    console.log(string, "string");
  };

  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.setItem} title="setItem" />
        <Button onPress={this.mergeItem} title="mergeItem" />
        <Button onPress={this.getItem} title="getItem" />
        <Button onPress={this.removeItem} title="removeItem" />
        <Button onPress={this.clear} title="clear" />
        <Button onPress={this.getAllKeys} title="getAllKeys" />
        <Button onPress={this.multiGet} title="multiGet" />
        <Button onPress={this.multiSet} title="multiSet" />
        <Button onPress={this.multiRemove} title="multiRemove" />
      </SafeAreaView>
    );
  }
}

export default AsyncStorageDemo;
