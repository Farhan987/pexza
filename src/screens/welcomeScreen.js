import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { BLACK, WHITE } from "../theme/colors";
import { SMALL } from "../font/font";
import CustomButton from "../component/CustomComponents/Button/CustomerButton";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
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

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: BLACK, fontSize: 25 }}>WELCOME</Text>

          <View style={{ height: 10 }} />

          <Text style={{ color: BLACK, fontSize: SMALL }}>
            Choose your account type.
          </Text>
        </View>

        <View style={{ height: 30 }} />

        <View>
          <CustomButton Text="LANDLORD" color={WHITE} backgroundColor={BLACK} />

          <View style={{ height: 10 }}></View>

          <CustomButton Text="TENANT" color={BLACK} borderColor={BLACK} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    justifyContent: "center"
  }
});
