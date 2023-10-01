import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Cabecalho } from './src/Componentes/Cabecalho'; 
import Principal from './src/Componentes/Principal'; 
import { Rodape } from './src/Componentes/Rodape'; 

export default function App() {
  return (
    <View style={estilos.container}>
      <Cabecalho/> 
      <Principal/>
      <Rodape/> 
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    paddingHorizontal: 10, 
    paddingTop: 10,
  },
  titulo: {
    fontFamily: 'times-new-roman', 
    fontSize: 24, 
    fontWeight: 'bold', 
  },
});