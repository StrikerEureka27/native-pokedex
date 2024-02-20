import {StyleSheet, Text, View} from 'react-native';
import {PokemonSingleColor} from '../../styles/colors.config';

const Chip = ({name}): React.JSX.Element => {
  return (
    <View
      style={[styles.container, {backgroundColor: PokemonSingleColor[name]}]}>
      <Text style={[{color: 'white', fontWeight: '400'}]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 60,
    margin: 3,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default Chip;
