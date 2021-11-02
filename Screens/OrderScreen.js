import React from 'react'
import { View, Text } from 'react-native'
import ViewCart from '../Components/Detail/ViewCart'
import FoodsItem from '../Components/Home/FoodsItem'

export default function OrderScreen() {
    return (
        <View>
            <FoodsItem/>
            <ViewCart/>
        </View>
    )
}
