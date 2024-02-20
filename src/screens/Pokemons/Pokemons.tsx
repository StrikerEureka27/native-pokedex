import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {fetchPokemons} from './PokemonSlice';
import React, {useEffect, useState} from 'react';
import {IPokemon} from '../../models/Pokemon.model';
import PokemonCard from '../PokemonCard/PokemonCard';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

const windowHeight = Dimensions.get('window').height;

const Pokemons = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <View style={styles.container}>
      {pokemons.status === 'succeeded' && pokemons.data !== undefined ? (
        <FlatList
          data={pokemons.data}
          refreshing={isLoading}
          onRefresh={() => {
            dispatch(fetchPokemons());
          }}
          renderItem={({item}) => (
            <PokemonCard
              id={item.id}
              name={item.name}
              sprites={item.sprites}
              types={item.types}
            />
          )}
          keyExtractor={item => item.name}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  loadingContainer: {
    height: windowHeight / 2,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Pokemons;
