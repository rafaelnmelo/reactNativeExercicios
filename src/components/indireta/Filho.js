import React from 'react'
import { Button, Text } from 'react-native'

export default props => {

    function gerarNumero(min, max) {
        const fator = max-min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title='Gerar número aleatório'
            onPress={function() {
                const numeroGerado = gerarNumero(props.min, props.max)
                props.funcao(numeroGerado, "O numero é: ")
            }}
        />
    )
}