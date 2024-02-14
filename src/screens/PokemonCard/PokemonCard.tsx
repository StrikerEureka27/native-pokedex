import {StyleSheet, Text, View} from 'react-native';
import PokemonInfo from './PokemonInfo';
import PokemonFrame from './PokemonFrame';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function PokemonCard(): React.JSX.Element {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.pokemonContainer}
      onPress={() => {
        navigation.navigate('PokemonDetail', {itemId: 1});
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#19c4ac', '#56ccb1', '#9fe0b9']}
        style={styles.linearGradient}>
        <PokemonInfo />
        <PokemonFrame />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pokemonContainer: {
    margin: 10,
    height: 120,
    borderRadius: 10,
    backgroundColor: 'red',
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
