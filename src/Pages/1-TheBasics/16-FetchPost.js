import React, { PureComponent } from "react";
import { View, Text } from "react-native";

export default class FetchPost extends PureComponent {
  state = {};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    return fetch(
      "https://wbd.api.t.jiabangou.com/api/wshop/sessions/test/create_token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "merchAcct=admin&merchCode=1000&password=111111"
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data, "data");
      })
      .catch(err => {
        console.log(err, "err");
      });
  };

  render() {
    return <View />;
  }
}
