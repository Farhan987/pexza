import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button, Text, Right, Left, Item, Input, Icon } from "native-base";
import { WHITE, GREY, BLACK } from "../../theme/colors";
import CustomTextInput from "../../component/CustomComponents/TextInput/CuustomTextInput";
import CustomButton from "../../component/CustomComponents/Button/CustomerButton";
import { SMALL } from "../../font/font";

class LandlordLoginScreen extends Component {
  state = {
    email: "",
    isEmailValid: true,
    isPasswordValid: true
  };

  emailValidation = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ isEmailValid: false });
      this.setState({ email: text });
    } else {
      this.setState({ isEmailValid: true });
      this.setState({ email: text });
    }
  };

  passwordValidation = text => {
    if (text.length < 5) {
      this.setState({ isPasswordValid: false });
      this.setState({ Password: text });
    } else {
      this.setState({ isPasswordValid: true });
      this.setState({ Password: text });
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 70,
            backgroundColor: "red"
          }}
        >
          {/* <Image
            resizeMode="stretch"
            source={require("")}
            style={{ alignSelf: "center", height: 200, width: "90%" }}
          /> */}
        </View>

        <View
          style={{ alignItems: "center", justifyContent: "center", height: 50 }}
        >
          <Text style={{ fontSize: 25, alignSelf: "center" }}>
            LANDLORD LOGIN
          </Text>
          <Text
            style={{
              fontSize: SMALL,
              color: GREY,
              alignSelf: "center"
            }}
          >
            Please login to continue using the app
          </Text>
        </View>
        <View style={{ height: 15 }} />
        <View style={{ height: 50 }}>
          <CustomTextInput
            keyboardType="email-address"
            showIcon
            iconName="user"
            placeholder="Email"
            onChangeText={text => this.emailValidation(text)}
          />
          {this.state.isEmailValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              Email is not valid
            </Text>
          )}
        </View>
        <View style={{ height: 15 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
            showIcon
            iconName="lock"
            placeholder="Password"
            onChangeText={text => this.passwordValidation(text)}
          />
          {this.state.isPasswordValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              Password must be atleast 5 char long
            </Text>
          )}
        </View>

        <View style={{ height: 30 }} />

        <CustomButton backgroundColor={BLACK} color={WHITE} Text="LOGIN" />

        <View style={{ height: 10 }} />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 50
          }}
        >
          <Text style={{ color: BLACK }}>Dont't Have an Account?</Text>
          <TouchableOpacity>
            <Text style={{ color: BLACK, fontWeight: "bold", marginTop: 5 }}>
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default LandlordLoginScreen;

styles = StyleSheet.create({
  Container: {
    backgroundColor: WHITE,
    justifyContent: "center",
    flex: 1
  }
});
