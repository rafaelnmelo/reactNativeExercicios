import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
// import Primeiro from './components/Primeiro'
// import Default, { Comp1,Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from "./components/direta/Pai"
// import Pai from "./components/indireta/Pai"
// import ContadorV2 from "./components/contador/ContadorV2"
// import Diferenciar from "./components/Diferenciar"
// import ParImpar from "./components/Par-Impar"
import Familia from "./components/relacao/Familia"
import Membro from "./components/relacao/Membro"

export default () => (
    <SafeAreaView style={style.App}>
        <Familia>
            <Membro nome="Bia" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva"/>
        </Familia>
        <Familia>
            <Membro nome="Carlos" sobrenome="Santos"/>
            <Membro nome="Jonas" sobrenome="Santos"/>
        </Familia>
        {/* <Botao />
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai/>
        <Pai />
        <Contador inicial={100} passo={7}/>
        <Contador />
        <Titulo principal="Cadastro" secundario="Cadastre seu Produto"/>
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