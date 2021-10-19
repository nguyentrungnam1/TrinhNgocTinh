import React from 'react'
import { View, Text } from 'react-native'
import DiscoverMore from '../Components/DiscoverMore'
import HeaderTabs from '../Components/HeaderTabs'

export default function HomeScreen() {
    return (
        <View>
            <HeaderTabs/>
            <DiscoverMore/>
        </View>
    )
}
