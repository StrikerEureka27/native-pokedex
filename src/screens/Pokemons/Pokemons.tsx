import {Button, StyleSheet, Text, View} from 'react-native';
import PokemonCard from '../PokemonCard/PokemonCard';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchPokemons} from './PokemonSlice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';

function Pokemons(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <ScrollView style={styles.container}>
      {pokemons.status === 'succeeded' && pokemons.data !== undefined ? (
        <View>
          {pokemons.data.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              id={pokemon.id}
              name={pokemon.name}
              sprites={pokemon.sprites}
              types={pokemon.types}
            />
          ))}
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
});

export default Pokemons;
