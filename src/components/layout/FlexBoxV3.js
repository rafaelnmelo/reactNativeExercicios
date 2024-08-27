import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <SafeAreaView style={style.FlexV3}>
            <Quadrado />
            <Quadrado color='#F00' lado={100} />
            <Quadrado color='#0F0' />
            <Quadrado color='#00F' />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row", //inverter o main axis
        height: 350,
        // flex: 1,
        width: '100%',
        alignItems: "center", //alinhamento no cross axis invertido
        justifyContent: "space-evenly", //de acordo com o main axis invertido
        backgroundColor: '#229'
    }
})