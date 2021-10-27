import React from 'react'
import { View, Text } from 'react-native'
import About from '../Components/Detail/About'

export default function NewDetail({route}) {
    return (
        <View>
            <About route = {route}/>
        </View>
    )
}
