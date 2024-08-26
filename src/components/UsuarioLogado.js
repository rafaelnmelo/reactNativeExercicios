import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.fonteGrande}>Usuário Logado:</Text>
                <Text style={Estilo.fonteGrande}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}