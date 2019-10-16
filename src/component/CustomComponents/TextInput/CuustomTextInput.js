import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Item, Icon, Input, Button, Text } from "native-base";
import { CUSTOM_FEILD_COLOR, BLACK, GREY } from "../../../theme/colors";
import { LARGE } from "../../../font/font";
class CustomTextInput extends Component {
  state = {};
  render() {
    return (
      <Item
        style={{
          width: "97%",
          alignSelf: "center",
          borderColor: CUSTOM_FEILD_COLOR,
          height: this.props.Inputheight ? this.props.Inputheight : 25
        }}
      >
        <View>
          {this.props.showIcon ? (
            <Icon
              name={this.props.iconName ? this.props.iconName : "home"}
              type="FontAwesome"
              style={{
                color: this.props.iconColor ? this.props.iconColor : "#979797",
                alignSelf: "flex-start",
                fontSize: this.props.fontSize ? this.props.fontSize : LARGE
              }}
            />
          ) : (
            false
          )}
        </View>
        <Input
          disabled={this.props.disabled ? this.props.disabled : false}
          secureTextEntry={
            this.props.secureTextEntry ? this.props.secureTextEntry : false
          }
          onChangeText={
            this.props.onChangeText ? this.props.onChangeText : text => false
          }
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : "default"
          }
          placeholder={
            this.props.placeholder ? this.props.placeholder : "Enter"
          }
          style={{ fontSize: LARGE }}
          placeholderTextColor="#979797"
        />
      </Item>
    );
  }
}

export default CustomTextInput;
