import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Cabecalho() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>AUpreciando Doguinhos</Text>
      <Text style={estilos.texto}>Descubra raças de cachorros fofinhos (ou não)</Text>
      <Text style={estilos.texto}>The Dog API</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff', 
    fontSize: 18,
    fontFamily: 'Times New Roman', 
  },
});
