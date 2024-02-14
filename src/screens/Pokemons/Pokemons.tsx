import {StyleSheet, Text, View} from 'react-native';
import PokemonCard from '../PokemonCard/PokemonCard';
import {ScrollView} from 'react-native-gesture-handler';

function Pokemons(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
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
