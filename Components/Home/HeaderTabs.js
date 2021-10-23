import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Giao hàng");
  return (
    <View
      style={{ flexDirection: "row", paddingVertical: 10, alignSelf: "center" , backgroundColor: "white"}}
    >
      <HeaderButton
        text="Giao hàng"
        buttonColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Mang đi"
        buttonColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingHorizontal: 16,
        borderRadius: 30,
        paddingVertical: 6,
        marginRight: 5,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
