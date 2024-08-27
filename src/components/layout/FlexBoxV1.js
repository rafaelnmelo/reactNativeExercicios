import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <SafeAreaView style={style.FlexV1}>
            <Quadrado />
            <Quadrado color='#F00' />
            <Quadrado color='#0F0' />
            <Quadrado color='#00F' />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1, //ou flexgrow
        justifyContent: "space-evenly", //alinhamento de acordo com o main axis
        backgroundColor: '#229'
    }
})