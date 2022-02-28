import React from 'react';
import { View, Image,StyleSheet, FlatList } from 'react-native';

import Texto from '../../../components/Texto';

export default function Item({item:{ nome, imagem}}){

    return <>
    <View style={estilos.item} >  
        <Image style={estilos.imagem} source= {imagem} /> 
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
    </>
}



const estilos = StyleSheet.create( {
    titulo:{
        fontWeight:"bold",
        marginTop: 32,
        color:"#464646",
        lineHeight:32,
        fontSize:20,
        marginBottom:8
    },

    item:{
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical:16,
        paddingHorizontal:16,
        alignItems: "center",
    },
    imagem:{
        width: 46,
        height:46,
    },
    nome:{
        fontSize:16,
        lineHeight:16,
        marginLeft:11,
        color:"#ffa500"
    }



})