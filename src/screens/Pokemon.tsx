import { View, Text, Image, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';
import { useEffect, useState, useContext} from 'react';
import { getPokemonById } from '../services/Api';
import Background from '../assets/images/Background.png'; 
import { PokemonContext } from '../context/PokemonContext';

export default function Pokemons({ route }: any) {
  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    id: {
      marginTop: 40,
      color: '#e7c500ff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    image: {
      width: 250,
      height: 250,
      marginVertical: 20,
    },

      containerDetails: {
        flex: 1,
        alignItems: 'center',
      justifyContent: 'center',
        
      
    },

    name: {
      fontSize: 22,
      fontWeight: 'bold',
      textTransform: 'capitalize',
      color: '#e7c500ff',
    },
    type: {
      fontSize: 22,
      fontWeight: 'bold',
      textTransform: 'capitalize',
      color: '#e7c500ff',
      marginTop: 10,
    },

  
  });


useEffect(() => {
  async function loadPokemon() {
    try {
      const cleanId = String(pokemonId).match(/\d+/)?.[0];

      if (!cleanId) {
        throw new Error('ID inválido');
      }

      const data = await getPokemonById(cleanId);
      setPokemon(data);
    } catch (error) {
      console.error('Erro ao carregar Pokémon:', error);
    } finally {
      setLoading(false);
    }
  }

  loadPokemon();
}, [pokemonId]);




  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!pokemon) {
    return <Text>Erro ao carregar Pokémon</Text>;
  }

  return (
    <ImageBackground
      source={Background}
      style={styles.container}
      resizeMode="cover"
    >
      <View>
        {/* ID */}
        <Text style={styles.id}>ID: {pokemon.id}</Text>
      </View>
      <View style={styles.container}>
        {/* Imagem */}
        <Image source={{ uri: pokemon.image }} style={styles.image} />

          {/* Nome */}
        <Text style={styles.name}>Name : {pokemon.name}</Text>

        {/* Tipo(s) */}
        <Text style={styles.type}>Type: {pokemon.types}</Text>
      </View>

    
    </ImageBackground>
  );
}
