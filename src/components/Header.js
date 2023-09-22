import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <AntDesign name="menu-unfold" size={24} color="black" />
      <Text
        style={{
          color: "#4B4B4B",
          letterSpacing: 4,
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        skinnect
      </Text>
      <MaterialIcons name="notifications-on" size={26} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
