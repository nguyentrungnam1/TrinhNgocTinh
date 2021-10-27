import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import StackNavigation from "./Navigation/StackNavigation";
import TabNavigation from "./Navigation/TabNavigation";
import HomeScreen from "./Screens/HomeScreen";
import NewDetail from "./Screens/NewDetail";

export default function App() {
  return (
      <SafeAreaView style ={{backgroundColor: "#eee" , flex: 1}}>
        <StackNavigation/>
        {/* <Login/> */}
        {/* <Register/> */}
      </SafeAreaView>
  );
}
