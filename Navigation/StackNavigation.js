import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import NewDetail from '../Screens/NewDetail';
import About from '../Components/Detail/About';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();


export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "TabNavigation" component = {TabNavigation}  options = {{headerShown: false}}/>
                <Stack.Screen name = "NewDetail" component = {NewDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
