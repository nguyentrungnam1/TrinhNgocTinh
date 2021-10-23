import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TabNavigation from "./Navigation/TabNavigation";
import HomeScreen from "./Screens/HomeScreen";

export default function App() {
  return (
      <SafeAreaView style ={{backgroundColor: "#eee" , flex: 1 , paddingLeft: 10 , paddingRight: 10}}>
        <TabNavigation/>
      </SafeAreaView>
  );
}
