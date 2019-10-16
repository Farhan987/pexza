import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TenantSignUpScreen from "./src/screens/TenantAuthScreens/TenantSignUpScreen";
// import TenantLoginScreen from "./src/screens/TenantAuthScreens/TenantLoginScreen";
// import WelcomeScreen from "./src/screens/welcomeScreen";
// import LandlordSignUpScreen from "./src/screens/LandlordAuthScreens/LandlordSignUpScreen";
// import LandlordLoginScreen from "./src/screens/LandlordAuthScreens/LandlordLoginScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TenantSignUpScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
