import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
const CompleteProfileCard = () => {
  return (
    <View
      style={{
        width: 342,
        height: 163,
        backgroundColor: "#FFF7F5",
        borderRadius: 40,

        margin: 6,
        padding: 15,
        elevation: 20,
        shadowColor: "#000000",
      }}
    >
      <View style={{ padding: 10, flexDirection: "row", gap: 4 }}>
        <Ionicons name="md-checkmark-done-outline" size={24} color="black" />
        <Text style={{ color: "#4B4B4B", fontSize: 15, fontWeight: "700" }}>
          Complete your profile now
        </Text>
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Text style={{ color: "#FF460C", fontSize: 14, fontWeight: "500" }}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ padding: 5, color: "#4B4B4B", fontWeight: "500" }}>
          We value your opinion! Complete your profile to receive personalized
          recommendations.
        </Text>
      </View>

      <View style={{ marginTop: 5 }}>
        <Text
          style={{
            color: "#FF460C",
            fontWeight: "500",
            padding: 2,
            marginLeft: 5,
          }}
        >
          24%
        </Text>
        <View
          style={{
            marginTop: 2,
            marginLeft: 5,
            width: 285,
            height: 9,
            backgroundColor: "#e4e4e4",
            borderRadius: 10,
            position: "relative",
          }}
        ></View>
        <View
          style={{
            marginLeft: 5,
            width: 94,
            height: 9,
            backgroundColor: "#e44",
            borderRadius: 10,
            position: "relative",
            top: -9,
          }}
        ></View>
      </View>
    </View>
  );
};

export default CompleteProfileCard;

const styles = StyleSheet.create({});
