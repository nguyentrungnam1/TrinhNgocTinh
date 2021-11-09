import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

const windowWidth = Dimensions.get ("window").width;
const windowHeight = Dimensions.get ("window").height;
const images = [
  {
    img_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
];

export default function About(props) {
  const {image,title,text} = props.route.params;
  return (
    <SafeAreaView>
      <ScrollView >
        <AboutTitle title={title}/>
        <AboutImage img = {image} />
        <Divider width={1} />
        <AboutText text = {text}/>
        <AboutImage img = {image} />
      </ScrollView>
    </SafeAreaView>
  );
}

const AboutTitle = (props) => (
  <View style = {{marginTop: 20}}>
    <Text style={{ fontSize: 20, fontWeight: "900" }}>{props.title}</Text>
  </View>
);

const AboutImage = (props) => (
  <View style={{ marginBottom: 10, marginTop: 30 }}>
  <TouchableOpacity >
    <Image
      source={{
        uri: props.img,
      }}
      style={{ width: windowWidth, height: (windowHeight/3) }}
    />
  </TouchableOpacity>
  </View>
);
const AboutText = (props) => (
  <>
    <Text style = {{fontSize: 20}}>{props.text}</Text>
  </>
);
