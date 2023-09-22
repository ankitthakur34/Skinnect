import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import SkinCareData from "../Data/SkinCareData";
import ModalCompo from "./ModalCompo";
const CareGuideCard = () => {
  const data = SkinCareData;
  const [modalVisible, setModalVisible] = useState(false);

  const [focus, setFocus] = useState(0);
  const modalOpen = (elem, index) => {
    setFocus(index);
    setModalVisible(true);
  };

  return (
    <View style={{}}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        //  transparent={true}
      >
        <ModalCompo focus={focus} setModalVisible={setModalVisible} />
      </Modal>
      <View
        style={{
          marginLeft: 6,
          flexDirection: "row",
          flexWrap: "wrap",
          borderRadius: 20,
          padding: 1,
          gap: 9,
        }}
      >
        {data.map((elem, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                modalOpen(elem, index);
              }}
              style={{
                borderWidth: 1,
                borderColor: "#4B4B4B",
                width: 110,
                height: 140,
                backgroundColor: elem.bcColor,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 20,
                overflow: "hidden",
                padding: 8,
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "600", textAlign: "center" }}
              >
                {elem.name}
              </Text>
              <Image source={elem.img} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CareGuideCard;

const styles = StyleSheet.create({});
