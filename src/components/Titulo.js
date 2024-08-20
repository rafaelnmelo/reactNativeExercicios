import React, { Fragment } from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    //Retornando dentro de View
    // <SafeAreaView>
    //     <Text style={Estilo.fonteGrande}>
    //         {props.principal}
    //     </Text>
    //     <Text>{props.secundario}</Text>
    // </SafeAreaView>

    //Retornando multiplos elementos por fragments
    // <Fragment>
    //     <Text style={Estilo.fonteGrande}>
    //         {props.principal}
    //     </Text>
    //     <Text>{props.secundario}</Text>
    // </Fragment>

    //Tags vazias (fragment implicito)
    <>
        <Text style={Estilo.fonteGrande}>
            {props.principal}
        </Text>
        <Text>{props.secundario}</Text>
    </>
)