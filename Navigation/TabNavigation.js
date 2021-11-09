import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AccountScreen from "../Screens/AccountScreen";
import OrderScreen from "../Screens/OrderScreen";
import StackNavigation from "./StackNavigation";
import StoreScreen from "../Screens/StoreScreen";
import NotifiScreen from "../Screens/NotifiScreen";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../Redux/store";


const store = configureStore();

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <ReduxProvider store = {store}>

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Cửa Hàng"
        component={StoreScreen}
        options={{
          tabBarLabel: "Cửa Hàng",
          tabBarIcon: ({color}) => <FontAwesome5 name="store" size={25}  color = {color}/>,
        }}
      />
      <Tab.Screen
        name="Đặt Hàng"
        component={OrderScreen}
        options={{
          tabBarLabel: "Đặt Hàng",
          tabBarIcon: ({color}) => <FontAwesome name="coffee" size={30} color = {color}/>,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome name="home" size={30} color = {color}/>,
          tabBarLabel: "Trang chủ",
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={NotifiScreen}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({color}) => <FontAwesome name="bell" size={30}  color = {color}/>,
        }}
      />
      <Tab.Screen
        name="Khác"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome name="user-circle-o" size={30}  color = {color}/>,
        }}
      />
    </Tab.Navigator>
    </ReduxProvider>
  );
}
