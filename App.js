import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StackNavigation from "./Navigation/StackNavigation";
import TabNavigation from "./Navigation/TabNavigation";
import HomeScreen from "./Screens/HomeScreen";
import NewDetail from "./Screens/NewDetail";

export default function App() {
  return (
      <SafeAreaView style ={{backgroundColor: "#eee" , flex: 1}}>
        <StackNavigation/>
      </SafeAreaView>
  );
}
