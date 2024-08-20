import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from './estilo'

export default ({inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(inicial)

    const incrementar = () => {
         setNumero(numero + passo)
         console.warn("Incrementado com sucesso")
    }
    const decrementar = () => setNumero(numero - passo)

    return (
        <>
            <Text style={Estilo.fonteGrande}> {numero} </Text>
            <Button title = "+"  onPress={incrementar} />
            <Button  title = "-" onPress={decrementar} />
        </>
    )
}