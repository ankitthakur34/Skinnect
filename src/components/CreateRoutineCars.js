import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CreateRoutineCars = () => {
  return (
    <View
      style={{
        marginTop: 22,
        width: 342,
        height: 161,
        backgroundColor: "#FFF7F5",
        borderRadius: 40,
        margin: 6,
        padding: 20,
        elevation: 20,
        shadowColor: "#000000",
      }}
    >
      <Text
        style={{
          color: "#4B4B4B",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        Let's get started on your skincare journey by creating a personalized
        routine tailored just for you.
      </Text>
      <View
        style={{
          marginTop: 23,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#4B4B4B",
            fontSize: 13,
            fontWeight: 700,
            marginTop: 8,
          }}
        >
          Your perfect routine awaits
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF460C",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 15,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              letterSpacing: 0.1,
            }}
          >
            Create Routine
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateRoutineCars;

const styles = StyleSheet.create({});
