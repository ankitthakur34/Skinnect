import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

// components
import CompleteProfileCard from "../components/CompleteProfileCard";
import CreateRoutineCars from "../components/CreateRoutineCars";
import ProgressCard from "../components/ProgressCard";
import Header from "../components/Header";
import CareGuideCard from "../components/CareGuideCard";

const Home = () => {
  return (
    <View>
      <ScrollView>
        <Header />

        <View
          style={{
            margin: 8,
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Ionicons name="md-sunny-sharp" size={35} color="orange" />
          <Text
            style={{
              padding: 3,
              fontSize: 18,
              fontWeight: "700",
              color: "#4B4B4B",
            }}
          >
            Good Morning , Ankit
          </Text>
          <Entypo
            style={{ padding: 5 }}
            name="emoji-happy"
            size={21}
            color="orange"
          />
        </View>

        <CompleteProfileCard />
        <CreateRoutineCars />
        <ProgressCard />

        <View style={{ marginTop: 15, padding: 10 }}>
          <Text style={{ color: "#0F0E0E", fontSize: 24, fontWeight: "700" }}>
            The Skin Care Guide{" "}
          </Text>
          <Text
            style={{
              marginTop: 4,
              color: "#4B4B4B",
              fontSize: 13,
              fontWeight: "700",
            }}
          >
            Unlock the Secrets of Healthy Skin with {"\n"}Educational Content!
          </Text>
        </View>
        <LinearGradient
          colors={["#D2DCFE", "#D1EEEC", "#FFE2D2"]}
          style={{ backgroundColor: "#FFE2D2", borderRadius: 17 }}
        >
          <CareGuideCard />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
