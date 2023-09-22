import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const ProgressCard = () => {
  return (
    <View
      style={{
        marginTop: 22,
        width: 342,
        height: 379,
        backgroundColor: "#FFF7F5",
        borderRadius: 40,
        margin: 6,
        padding: 20,
        elevation: 20,
        shadowColor: "#000000",
      }}
    >
      <Text style={{ color: "#FF460C", fontWeight: "700", fontSize: 13 }}>
        21 Sept,Thusrday
      </Text>
      <Text style={{ color: "#4B4B4B", fontSize: 16, fontWeight: 700 }}>
        Daily Routine Progress:
      </Text>
      <Text
        style={{
          marginTop: 15,
          color: "#4B4B4B",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        Almost there!{" "}
      </Text>
      <Text style={{ color: "#4B4B4B", fontSize: 13, fontWeight: 700 }}>
        “Just a 25% leap and you'll have a flawless skin!"
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "#FF460C",
            fontWeight: "700",
            fontSize: 13,
          }}
        >
          10/12 Task
        </Text>
        <Text
          style={{
            color: "#FF460C",
            fontWeight: "700",
            fontSize: 13,
          }}
        >
          75%
        </Text>
      </View>
      <View
        style={{
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
          width: 224,
          height: 9,
          backgroundColor: "#e44",
          borderRadius: 10,
          position: "relative",
          top: -9,
        }}
      ></View>
      <View
        style={{
          marginTop: 25,
          backgroundColor: "lightgrey",
          width: 298,
          height: 1,
        }}
      ></View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Text
            style={{
              color: "#FF460C",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Next Task
          </Text>
          <MaterialIcons name="format-indent-increase" size={22} color="grey" />
        </View>
        <View>
          <Text
            style={{
              color: "#0F0E0E",
              fontSize: 13,
              fontWeight: "700",
            }}
          >
            View All Task
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          gap: 40,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 2,
            borderRadius: 6,
            borderColor: "#4B4B4B",
          }}
        ></View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#4B4B4B" }}>
            Apply Sun Protection (1 minute)
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "500", color: "#969696" }}>
            Today
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 17,
          flexDirection: "row",
          gap: 40,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 2,
            borderRadius: 6,
            borderColor: "#4B4B4B",
          }}
        ></View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#4B4B4B" }}>
            Apply Lip Care (15 seconds)
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "500", color: "#969696" }}>
            Today
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressCard;

const styles = StyleSheet.create({});
