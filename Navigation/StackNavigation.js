import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import NewDetail from '../Screens/NewDetail';
import About from '../Components/Detail/About';
import TabNavigation from './TabNavigation';
import Login from '../Components/Authentication/Login';
import Register from '../Components/Authentication/Register';

const Stack = createStackNavigator();


export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "Register" component = {Register}/>
                <Stack.Screen name = "TabNavigation" component = {TabNavigation}  options = {{headerShown: false}}/>
                <Stack.Screen name = "NewDetail" component = {NewDetail} options = {{title:"Chi tiết"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
