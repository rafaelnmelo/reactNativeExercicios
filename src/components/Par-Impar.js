import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    return (
        <SafeAreaView>
            <Text style={Estilo.fonteGrande}>O resultado é:</Text>
            {num % 2 === 0
                ? <Text style={Estilo.fonteGrande}>Par</Text>
                : <Text style={Estilo.fonteGrande}>Impar</Text>
            }
        </SafeAreaView>
        
    )
}