import {StyleSheet, Text, View} from 'react-native';
import Chip from '../../components/Chip/Chip';

function PokemonInfo(): React.JSX.Element {
  return (
    <View style={styles.container} >
      <Text style={styles.largeText} >#001</Text>
      <Text style={styles.mediumText} >Bulbasaur</Text>
      <View style={styles.chipsContainer} >
        <Chip title="Grass" color='#eb96a1' fontColor='white' />
        <Chip title="Poison" color='#eb96a1' fontColor='white' />
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
    display: 'flex'
  },
  largeText:{
    color: 'white',
    fontSize: 25
  },
  mediumText:{
    color: 'white',
    fontSize: 15
  }
});

export default PokemonInfo;
