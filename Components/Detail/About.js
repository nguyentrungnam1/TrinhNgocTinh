import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, Dimensions } from "react-native";
import { Divider } from "react-native-elements";

const windowWidth = Dimensions.get ("window").width;
const windowHeight = Dimensions.get ("window").height;
const images = [
  {
    img_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
];

export default function About() {
  return (
    <SafeAreaView>
      <ScrollView>
        <AboutTitle title="Nguyễn Trung Nam" />
        <AboutImage />
        <Divider width={1} />
        <AboutText text = "NGUYÊN tRUNG nAM"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const AboutTitle = (props) => (
  <>
    <Text style={{ fontSize: 30, fontWeight: "300" }}>{props.title}</Text>
  </>
);

const AboutImage = (props) => (
  <View style={{ marginBottom: 10, marginTop: 30 }}>
    <Image
      source={{
        uri: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      }}
      style={{ width: windowWidth, height: (windowHeight/3) }}
    />
  </View>
);
const AboutText = (props) => (
  <>
    <Text>{props.text}</Text>
  </>
);
