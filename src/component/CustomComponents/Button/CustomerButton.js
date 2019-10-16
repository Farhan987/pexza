import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Item, Icon, Input, Button, Text } from "native-base";
import { GREY, WHITE } from "../../../theme/colors";
import { LARGE } from "../../../font/font";

class CustomButton extends Component {
  state = {};
  render() {
    return (
      <Button
        transparent={this.props.transparent ? this.props.transparent : false}
        onPress={this.props.onPress ? this.props.onPress : text => false}
        style={{
          width: "97%",
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : WHITE,
          alignSelf: "center",
          justifyContent: "center",
          height: 50,
          borderWidth: this.props.borderWidth ? this.props.borderWidth : 0,
          borderColor: this.props.borderColor ? this.props.borderColor : ""
        }}
      >
        <Text
          style={{
            fontSize: LARGE,
            alignSelf: "center",
            color: this.props.color ? this.props.color : "#00000"
          }}
        >
          {this.props.Text ? this.props.Text : "Press"}
        </Text>
      </Button>
    );
  }
}

export default CustomButton;
