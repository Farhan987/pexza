import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: "10%",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
          }}
        ></View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  }
});
