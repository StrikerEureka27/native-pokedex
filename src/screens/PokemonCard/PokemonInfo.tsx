import {StyleSheet, Text, View} from 'react-native';
import Chip from '../../components/Chip/Chip';
import {IPokemonInfo} from '../../models/Pokemon.model';

function PokemonInfo({id, name, types}: IPokemonInfo): React.JSX.Element {

  

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>{`#0${
        id != undefined && id <= 9 ? '0' : ''
      }${id}`}</Text>
      <Text style={styles.mediumText}>{name}</Text>
      <View style={styles.chipsContainer}>
        {types != undefined ? (
          types.map(type => (
            <Chip
              key={id + Math.round(Math.random() * 1000)}
              name={type.type.name}
            />
          ))
        ) : (
          <Text>Error</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    padding: 10,
    margin: 10,
    flexDirection: 'column',
    display: 'flex',
  },
  chipsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
  },
  largeText: {
    color: 'white',
    fontSize: 25,
  },
  mediumText: {
    color: 'white',
    fontSize: 15,
  },
});

export default PokemonInfo;
