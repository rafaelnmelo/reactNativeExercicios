import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <SafeAreaView style={style.FlexV2}>
            <Quadrado />
            <Quadrado color='#F00' />
            <Quadrado color='#0F0' />
            <Quadrado color='#00F' />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: "center", //alinhamento no cross axis
        justifyContent: "flex-end", //alinhamento de acordo com o main axis
        backgroundColor: '#229'
    }
})