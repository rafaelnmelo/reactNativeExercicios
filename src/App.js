import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

// import Primeiro from './components/Primeiro'
// import Default, { Comp1,Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
import Botao from './components/Botao'

export default () => (
    <SafeAreaView style={style.App}>
        <Botao />
        {/* <Titulo principal="Cadastro" secundario="Cadastre seu Produto"/>
        <Aleatorio min={10} max={25}/>
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={4}/>
        <Default />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "top",
        alignItems: "center",
        padding: 20
    }
})