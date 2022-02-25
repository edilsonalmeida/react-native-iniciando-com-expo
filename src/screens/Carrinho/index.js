import React from 'react'
import { ScrollView, FlatList } from 'react-native';

import Detalhes from './components/Detalhes';
import Topo from './components/Topo';
import Item from './components/Item';


export default function Carrinho ({topo, detalhes, itens}){
    return  <>
                
            <FlatList
                data = {itens.lista}
                renderItem = {Item}
                keyExtractor ={({nome})=> nome}
                ListHeaderComponent={
                    () => {
                        return <>
                                <Topo {...topo} />
                                <Detalhes {...detalhes}/>
                            </>
                    }
                }

        />
    </>
}







  () => {
    return <>
    <Topo {...topo} />
    <Detalhes {...detalhes}/>
</>
}