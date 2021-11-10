import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  CheckBox,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const widthWindow = Dimensions.get("window").width;

export default function FoodsItem({ foods }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        // restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.name === food.name));
  return (
    <View>
      <FoodSearch />
      <ScrollView style={{ height: 700 }}>
        {foods.map((food, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              margin: 7,
              backgroundColor: "white",
              height: 110,
              borderRadius: 5,
            }}
          >
            <BouncyCheckbox
              iconStyle={{ borderRadius: 0 }}
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
            <FoodImages image={food.image_url} />
            <FoodInfo
              name={food.name}
              description={food.info}
              price={food.price}
            />
            <Divider width={0.5} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const FoodSearch = () => (
  <View
    style={{
      width: widthWindow,
      height: 100,
      backgroundColor: "white",
      marginTop: 30,
      justifyContent: "flex-end",
      paddingBottom: 10,
      marginBottom: 5,
    }}
  >
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FontAwesome name="search" size={30} style={{ position: "relative" }} />
      <TextInput
        placeholder="Tìm kiếm"
        style={{
          borderRadius: 5,
          backgroundColor: "gray",
          width: widthWindow - 100,
          height: 60,
        }}
      />
      <TouchableOpacity>
        <Text>Tìm kiếm</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const FoodImages = (props) => (
  <View
    style={{
      justifyContent: "center",
    }}
  >
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: 100, height: 100, borderRadius: 10 }}
    />
  </View>
);
const FoodInfo = (props) => (
  <View style={{ paddingLeft: 10 }}>
    <Text style={{ fontSize: 15, fontWeight: "300", paddingBottom: 5 }}>
      {props.name}
    </Text>
    <Text style={{ height: 50, width: 250 }}>{props.description}</Text>
    <Text style={{ fontSize: 18, paddingTop: 10 }}>{props.price}</Text>
  </View>
);
