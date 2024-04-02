import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const BagButton = ({ puchero, setPuchero }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "darkgray",
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <Text> Puchero! </Text>

      <View>
        <TextInput
          editable
          placeholder={0}
          onChangeText={(value) => setPuchero(value)}
        />
      </View>
    </View>
  );
};

export default BagButton;
