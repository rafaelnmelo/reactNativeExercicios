import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

export default props => {
    return (
        <SafeAreaView style={style.FlexV4}>
            <SafeAreaView style={style.V0} />
            <SafeAreaView style={style.V1} />
            <SafeAreaView style={style.V2} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#36c9a7',
        flexGrow: 1,
        height: 500 //receberá o tamanho fixo
    },
    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 9 //crescerá com porcentagem maior da area disponivel
    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1 //receberá a menor área
    }
})