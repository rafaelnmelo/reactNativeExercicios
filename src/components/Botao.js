import React from 'react'
import { Button } from 'react-native'

export default props => {
    function executar() {
        console.warn("Executado 00")
    }

    return (
        <>
            <Button
            title = "Executar 00"
            onPress={executar}
            />
            <Button
            title = "Executar 01"
            onPress={function() {
                console.warn("Executado 01")
            }}
            />
            <Button
            title = "Executar 02"
            onPress={() => console.warn("Executado 02")}
            />
        </>

    )
}