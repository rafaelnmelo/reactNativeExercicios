import React from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'

export default props => {
    return (
        <SafeAreaView style={style.Botoes}>
            <Button title='+' onPress={props.increment}/>
            <Button title='-' onPress={props.decrement}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row',
    }
})