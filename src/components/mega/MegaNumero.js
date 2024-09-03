import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Estilo from '../estilo'
import Contador from '../Contador'

export default ({num}) => {
    return (
        <SafeAreaView style={style.Container}>
            <Text style={[Estilo.fonteGrande, style.Num]}>
                {num}
            </Text>
        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Num: {
        color: '#fff'
    }
})