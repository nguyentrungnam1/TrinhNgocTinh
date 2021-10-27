import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DiscoverDetail from "./DiscoverDetail";



export default function DiscoverMore() {
  const [activeButton, setActiveButton] = useState("Ưu đãi đặc biệt");
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "300", margin: 10 }}>
        Khám phá thêm
      </Text>
      <View style={{ flexDirection: "row" }}>
        <ButtonDiscover
          text="Ưu đãi đặc biệt"
          buttonColor="white"
          textColor="organe"
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <ButtonDiscover
          text="Cập nhật từ nhà"
          buttonColor="white"
          textColor="organe"
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <ButtonDiscover
          text="#CoffeeLover"
          buttonColor="white"
          textColor="organe"
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </View>
      <View>
        <DiscoverDetail />
      </View>
    </View>
  );
}
const ButtonDiscover = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeButton === props.text ? "white" : "#eee",
      paddingHorizontal: 15,
      borderRadius: 30,
      marginRight: 5,
    }}
    onPress={() => props.setActiveButton(props.text)}
    
  >
    <Text
      style={{
        fontSize: 12,
        fontWeight: "300",
        paddingVertical: 10,
        color: props.activeButton === props.text ? "orange" : "black",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
