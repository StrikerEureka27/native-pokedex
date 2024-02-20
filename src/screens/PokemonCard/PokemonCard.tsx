import {StyleSheet, Text, View} from 'react-native';
import PokemonInfo from './PokemonInfo';
import PokemonFrame from './PokemonFrame';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {IPokemonCard} from '../../models/Pokemon.model';
import {PokemonsTypesColors} from '../../styles/colors.config';

function PokemonCard(pokemon: IPokemonCard): React.JSX.Element {
  const navigation = useNavigation();

  const pokemonType = pokemon.types[0].type.name.toUpperCase();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.pokemonContainer}
      onPress={() => {
        navigation.navigate('PokemonDetail', {pokemonName: pokemon.name, pokemonType: pokemonType});
      }}>
      {pokemon.types !== undefined ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={PokemonsTypesColors[pokemonType]}
          style={styles.linearGradient}>
          <PokemonInfo
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
          />
          <PokemonFrame sprites={pokemon.sprites} />
        </LinearGradient>
      ) : (
        <Text>Loading</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pokemonContainer: {
    margin: 10,
    height: 120,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
  },
  linearGradient: {
    width: 355,
    position: 'absolute',
    height: 120,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    flexDirection: 'row',
    display: 'flex',
  },
});

export default PokemonCard;
