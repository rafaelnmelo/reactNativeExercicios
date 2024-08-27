import React from 'react'
import { SafeAreaView } from 'react-native'

export default props => {
    const lado = 35
    return (
        <SafeAreaView style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000'
        }}>
            
        </SafeAreaView>
    )
}