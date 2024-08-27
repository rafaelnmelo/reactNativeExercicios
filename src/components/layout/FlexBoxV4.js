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
        // flexDirection: "row", //inverter o main axis
        // height: 350,
        flexGrow: 1,
        width: 100,
        // alignItems: "center", //alinhamento no cross axis 
        // justifyContent: "space-evenly", //de acordo com o main axis 
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#36c9a7',
        flexGrow: 1,
        height: 500
    },
    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 9
    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1
    }
})