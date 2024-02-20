import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Pokemons from '../../screens/Pokemons/Pokemons';
import Abilities from '../../screens/Abilities/Abilities';
import Moves from '../../screens/Moves/Moves';
import Items from '../../screens/Items/Items';
import NavigationTabs from '../Tabs/TabsNavigation';

function InputSearch(): JSX.Element {
  const [text, onChangeText] = useState('');

  const tabs = [
    {
      key: 123,
      name: 'Pokémons',
      component: Pokemons,
    },
    {
      key: 234,
      name: 'Abilities',
      component: Abilities,
    },
    {
      key: 345,
      name: 'Moves',
      component: Moves,
    },
    {
      key: 456,
      name: 'Items',
      component: Items,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer} >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="🔎 Search Pokemon, Ability..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: 'black',
    padding: 15,
    height: 52,
    fontSize: 15,
    textAlign: 'left',
    justifyContent: 'center',
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'red'
  },
  container: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'column'
  },
  navigationContainer: {
    flex: 1
  }
});

export default InputSearch;
