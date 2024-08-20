import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    //destructuring: ler algo dentro do objeto ou array
    const {min,max} = props 
    const delta = max - min +1
    const aleatorio = parseInt(Math.random() * delta) + min

    return (
        <Text style={Estilo.fonteGrande}>
        Número aleatório escolhido: {aleatorio}!
        </Text>
    )
}