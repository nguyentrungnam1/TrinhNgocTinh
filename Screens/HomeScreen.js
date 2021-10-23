import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import DiscoverDetail from '../Components/Home/DiscoverDetail'
import DiscoverMore from '../Components/Home/DiscoverMore'
import HeaderTabs from '../Components/Home/HeaderTabs'


export default function HomeScreen() {
    return (
        <SafeAreaView>
            <HeaderTabs/>
            <DiscoverMore/>
            <DiscoverDetail/>
        </SafeAreaView>
    )
}
