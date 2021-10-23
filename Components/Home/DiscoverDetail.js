import React from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const localRestaurants = [
  {
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    name: "Beachside Bar",
    date: "18/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Benihana",
    date: "17/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "India's Grill",
    date: "16/10",
  },
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function DiscoverDetail() {
  return (
    <ScrollView showsHorizontalScrollIndicator = {false}>
      {localRestaurants.map((item, index) => (
        <View key={index} style={{flexDirection: "row"}}>
        <View>
              <DetailImage image={item.image_url} />
              <DetailInfo name = {item.name} date = {item.date}/>
        </View>     
        </View>
      ))}
    </ScrollView>
  );
}
const DetailImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: windowWidth, height: 170 }}
    />
  </>
);
const DetailInfo = (props) => (
  <View>
    <Text>{props.name}</Text>
    <Text>{props.date}</Text>
    <AntDesign name="calendar" size={15} />
  </View>
);
