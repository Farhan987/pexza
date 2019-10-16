import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Button, Text } from "native-base";
import { WHITE, GREY, BLACK, NAVY_BLUE } from "../../theme/colors";
import CustomTextInput from "../../component/CustomComponents/TextInput/CuustomTextInput";
import CustomButton from "../../component/CustomComponents/Button/CustomerButton";
import CustomDropdown from "../../component/CustomComponents/customDropdown";

class LandlordSignUpScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobileNum: "",
    password: "",
    confirmPassword: "",
    isFirstNameValid: true,
    isLastNameValid: true,
    isDobValid: true,
    isEmailValid: true,
    isMobileNumValid: true,
    isPasswordValid: true,
    isConfirmPasswordValid: true
  };

  firstNameValidation = text => {
    if (text === "") {
      this.setState({ isFirstNameValid: false, firstName: text });
    } else {
      this.setState({ isFirstNameValid: true, firstName: text });
    }
  };
  lastNameValidation = text => {
    if (text === "") {
      this.setState({ isLastNameValid: false, lastName: text });
    } else {
      this.setState({ isLastNameValid: true, lastName: text });
    }
  };
  dobValidation = text => {
    if (text === "") {
      this.setState({ isDobValid: false, dob: text });
    } else {
      this.setState({ isDobValid: true, dob: text });
    }
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
  mobileNumberValidation = text => {
    if (text === "") {
      this.setState({ isMobileNumValid: false, mobileNum: text });
    } else {
      this.setState({ isMobileNumValid: true, mobileNum: text });
    }
  };
  passwordValidation = text => {
    if (text.length < 4) {
      this.setState({ isPasswordValid: false });
      this.setState({ password: text });
    } else {
      this.setState({ isPasswordValid: true });
      this.setState({ password: text });
    }
  };

  confirmPasswordValidation = text => {
    if (text.length < 4) {
      this.setState({ isConfirmPasswordValid: false });
      this.setState({ confirmPassword: text });
    } else {
      this.setState({ isConfirmPasswordValid: true });
      this.setState({ confirmPassword: text });
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
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
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50
            }}
          >
            <Text style={{ fontSize: 26, alignSelf: "center" }}>
              LANDLORD SIGNUP
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: GREY,
                marginTop: 0,
                alignSelf: "center"
              }}
            >
              Please Register your account to continue
            </Text>
          </View>
          <View style={{ height: 15 }}></View>
          <View style={{ height: 40 }}>
            <CustomTextInput
              showIcon
              iconName="user"
              placeholder="First Name"
              onChangeText={text => this.firstNameValidation(text)}
            />
            {this.state.isFirstNameValid ? (
              <Text />
            ) : (
              <Text style={{ marginLeft: 15, color: "red" }}>
                First Name is required
              </Text>
            )}
          </View>
          <View style={{ height: 15 }}></View>
          <View style={{ height: 40 }}>
            <CustomTextInput
              showIcon
              iconName="user"
              placeholder="Last Name"
              onChangeText={text => this.lastNameValidation(text)}
            />
            {this.state.isLastNameValid ? (
              <Text />
            ) : (
              <Text style={{ marginLeft: 15, color: "red" }}>
                Last Name is required
              </Text>
            )}
          </View>
          <View style={{ height: 15 }}></View>
          <View style={{ height: 40 }}>
            <CustomDropdown iconName="calendar" title="DOB" />
          </View>
          <View style={{ height: 15 }}></View>
          <View style={{ height: 40 }}>
            <CustomTextInput
              keyboardType="email-address"
              showIcon
              iconName="at"
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
          <View style={{ height: 40 }}>
            <CustomTextInput
              keyboardType="phone-pad"
              showIcon
              iconName="mobile"
              placeholder="Mobile Number"
              onChangeText={text => this.mobileNumberValidation(text)}
            />
            {this.state.isMobileNumValid ? (
              <Text />
            ) : (
              <Text style={{ marginLeft: 15, color: "red" }}>
                Mobile number is required
              </Text>
            )}
          </View>
          <View style={{ height: 15 }}></View>
          <View style={{ height: 40 }}>
            <CustomTextInput
              showIcon
              iconName="lock"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => this.passwordValidation(text)}
            />
            {this.state.isPasswordValid ? (
              <Text />
            ) : (
              <Text style={{ marginLeft: 15, color: "red" }}>
                Password must be atleast 4 char long
              </Text>
            )}
          </View>

          <View style={{ height: 15 }}></View>
          <View style={{ height: 50 }}>
            <CustomTextInput
              showIcon
              iconName="lock"
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={text => this.confirmPasswordValidation(text)}
            />
            {this.state.isConfirmPasswordValid ? (
              <Text />
            ) : (
              <Text style={{ marginLeft: 15, color: "red" }}>
                Confirm Password must be atleast 5 char long
              </Text>
            )}
          </View>

          <CustomButton
            backgroundColor={BLACK}
            color={WHITE}
            Text=" Register"
          />

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50
            }}
          >
            <Text style={{ color: BLACK }}>Already Have an Account?</Text>

            <TouchableOpacity>
              <Text style={{ color: BLACK, fontWeight: "bold" }}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LandlordSignUpScreen;

styles = StyleSheet.create({
  Container: {
    backgroundColor: WHITE,
    flex: 1
  }
});
