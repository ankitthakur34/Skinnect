import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import dataSkin from "../Data/SkinCareData";

const ModalCompo = ({ focus, setModalVisible }) => {
  const data = dataSkin;
  const modalData = data[0].guide;

  return (
    <View
      style={{
        margin: 20,
        width: "90%",
        height: "80%",
        position: "absolute",
        bottom: 45,
        backgroundColor: data[focus].bcColor,
        borderRadius: 40,
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <FlatList
        data={modalData}
        horizontal
        //pagingEnabled
        // snapToAlignment="center"
        renderItem={({ item, index }) => {
          return (
            <>
              {index == 0 ? (
                <View style={{ padding: 20, marginTop: 42 }}>
                  <Text
                    style={{
                      color: "#4B4B4B",
                      fontSize: 24,
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Text>

                  <View
                    style={{
                      marginTop: 25,
                      width: 280,
                      height: 280,
                      borderRadius: 20,
                      backgroundColor: "#FFF",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        alignItems: "center",
                      }}
                    />
                  </View>

                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text>HIDE</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ padding: 20 }}>
                  <Text
                    style={{
                      color: "#4B4B4B",
                      fontSize: 14,
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      color: "#4B4B4B",
                      fontSize: 20,
                      fontWeight: "700",
                      marginTop: 7,
                    }}
                  >
                    {item.heading1}
                  </Text>
                  <View
                    style={{
                      alignSelf: "center",
                      margin: 16,
                      width: 312,
                      height: 136,
                      backgroundColor: "#EBA7FC",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      borderRadius: 20,
                      letterSpacing: 0.3,
                    }}
                  >
                    <Text
                      style={{
                        color: "#4B4B4B",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      {item.para1}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#4B4B4B",
                      fontSize: 20,
                      fontWeight: "700",
                      marginTop: 7,
                    }}
                  >
                    {item.heading2}
                  </Text>
                  <View
                    style={{
                      alignSelf: "center",
                      margin: 10,
                      width: 312,
                      height: 136,
                      backgroundColor: "#EBA7FC",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      borderRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: "#4B4B4B",
                        fontSize: 16,
                        fontWeight: "600",
                        letterSpacing: 0.3,
                      }}
                    >
                      {item.para2}
                    </Text>
                  </View>
                </View>
              )}
            </>
          );
        }}
      />
    </View>
  );
};

export default ModalCompo;

const styles = StyleSheet.create({});
