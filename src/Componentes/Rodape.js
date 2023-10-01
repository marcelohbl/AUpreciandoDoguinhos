import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.infoEsquerda}>Dupla: Marcelo Henrique e Evillyn Sthefannya</Text>
      <Text style={estilos.infoDireita}>Turma: 513</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue', 
    padding: 10,
  },
  infoEsquerda: {
    color: '#fff', 
    fontFamily: 'Times New Roman',
    fontSize: 16, 
  },
  infoDireita: {
    color: '#fff', 
    fontFamily: 'Times New Roman', 
    fontSize: 16,
  },
});
