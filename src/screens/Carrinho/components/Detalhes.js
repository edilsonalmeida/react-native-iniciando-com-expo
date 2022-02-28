import React from "react";
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';


import Texto from "../../../components/Texto";


export default function Detalhes ({titulo, nomeVendedor, logoVendedor, desc, preco, botao, navigation}){

return <>
            <Texto style={estilos.titulo}> {titulo}</Texto>
            <View style={estilos.vendedor}>
                <Image source={logoVendedor} style={estilos.logoVendedor}/>
                <Texto style={estilos.nomeVendedor}> {nomeVendedor}</Texto>
            </View>
            <Texto style={estilos.desc}> {desc}</Texto>
            <Texto style={estilos.preco}> {preco}</Texto>

            <TouchableOpacity style={estilos.botao} onPress={()=>{navigation.navigate('Finalizar')}}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
        </>
}

const estilos = StyleSheet.create({
    titulo: {
        color:"#ffa500",
        fontWeight: "bold",
        fontSize:30,
        lineHeight:42
    },
    desc:{
        color:"#a3a3a3",
        fontSize:16,
        lineHeight:26,
    },
    preco:{
        color:"#ffa500",
        fontSize:30,
        fontWeight: 'bold',
        lineHeight:42,
        marginTop:8
    },
    vendedor:{
        flexDirection:"row",
        paddingVertical:12,
    },
    nomeVendedor:{
        fontSize:20,
        lineHeight:42,
        marginLeft:10,
        
    },
    logoVendedor:{
        width:32,
        height:32,
        marginLeft:10,
    },
    botao:{
        marginTop:16,
        backgroundColor: "#ffa500",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao:{
        textAlign: "center",
        color:"#fff",
        fontSize:18,
        lineHeight: 28,
        fontWeight:"bold"
    }
})