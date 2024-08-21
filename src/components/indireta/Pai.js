import React, { useState } from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')

    //função que será passada por props
    function exibirValor(numero, text) {
        setNum(numero)
        setText(text)
    }

    return (
        <>
            <Text style={Estilo.fonteGrande}>
                {text}{num}
            </Text>
            <Filho 
                min={1} 
                max={30} 
                funcao={exibirValor}/>
        </>
    )
}