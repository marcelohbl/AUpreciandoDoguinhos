import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import axios from 'axios';

export default function Principal() {
  const [raçaDigitada, setRaçaDigitada] = useState('');
  const [cachorro, setCachorro] = useState(null);
  const [imagemCachorro, setImagemCachorro] = useState('');

  const buscarDadosDaRaça = async () => {
    try {
      setCachorro(null);
      setImagemCachorro('');

      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${raçaDigitada}`);
      if (response.data.length > 0) {
        const breed = response.data[0];
        buscarImagemDoCachorro(breed.id);
        setCachorro(breed);
      }
    } catch (error) {
      console.error('Erro ao buscar dados da raça de cachorro:', error);
    }
  };
  const buscarImagemDoCachorro = async (breedId) => {
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`);
      if (response.data.length > 0) {
        const image = response.data[0];
        setImagemCachorro(image.url);
      } else {
        setImagemCachorro('');
      }
    } catch (error) {
      console.error('Erro ao buscar imagem do cachorro:', error);
    }
  };
  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Digite o nome da raça"
        value={raçaDigitada}
        onChangeText={(text) => setRaçaDigitada(text)}
        style={estilos.textInput}
      />
      <Button title="Buscar Raça" onPress={buscarDadosDaRaça} />
      {cachorro && (
        <View style={estilos.infoContainer}>
          <Image style={estilos.imagem} source={{ uri: imagemCachorro || '' }} />
          <Text style={estilos.texto}>Nome: {cachorro.name}</Text>
          <Text style={estilos.texto}>Temperamento: {cachorro.temperament}</Text>
          <Text style={estilos.texto}>Altura Média: {cachorro.height?.metric || 'Não disponível'} cm</Text>
          <Text style={estilos.texto}>Estimativa de Vida: {cachorro.life_span.replace('years', 'anos')}</Text>
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 40,
    color: '#fff',
    backgroundColor: '#333',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  texto: {
    color: '#fff',
    fontFamily: 'Times New Roman', 
    textAlign: 'center', 
  },
  infoContainer: {
    alignItems: 'center',
  },
  imagem: {
    width: 210, 
    height: 210, 
    borderRadius: 10, 
    marginVertical: 10,
  },
});