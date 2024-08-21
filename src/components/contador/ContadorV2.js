import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {
    const [num, setNum] = useState(0)
    const increment = () => setNum(num + 1)
    const decrement = () => setNum(num - 1)

    return (
        <>
            <Text style={Estilo.fonteGrande}>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes increment={increment} decrement={decrement}/>
        </>
    )
}