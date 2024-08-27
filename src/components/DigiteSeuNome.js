import React, { useState } from 'react'
import { TextInput, Text, SafeAreaView } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Input inicial')
    return (
        <SafeAreaView style={Estilo.fonteGrande}>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </SafeAreaView>
    )
}