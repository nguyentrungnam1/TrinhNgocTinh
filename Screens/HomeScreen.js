import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import DiscoverDetail from '../Components/Home/DiscoverDetail'
import DiscoverMore from '../Components/Home/DiscoverMore'
import HeaderTabs from '../Components/Home/HeaderTabs'


export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <HeaderTabs/>
            <DiscoverMore/>
            <DiscoverDetail navigation = {navigation}/>
        </SafeAreaView> 
    )
}
