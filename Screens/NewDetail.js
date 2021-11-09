import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import About from "../Components/Detail/About";


export default function NewDetail({ route ,navigation}) {
  return (
    <View>
      <Button
        title="on click"
        onPress={() => navigation.push("TabNavigation")}
      />
      <About route={route} />
    </View>
  );
}
