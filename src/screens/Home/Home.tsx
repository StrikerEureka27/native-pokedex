import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import InputSearch from '../../components/Input/InputSearch';
import NavigationTabs from '../../components/Tabs/TabsNavigation';
import Pokemons from '../Pokemons/Pokemons';
import Abilities from '../Abilities/Abilities';
import Moves from '../Moves/Moves';
import Items from '../Items/Items';

function Home(): React.JSX.Element {
  const ScreenHeight = Dimensions.get('window').height;

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
    <View style={[styles.container, {height: ScreenHeight}]}>
      <InputSearch />
      <View style={styles.navigationContainer} >
        <NavigationTabs idTab="home-navigation-tab" tabs={tabs} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  navigationContainer: {
    flex: 1
  }
});

export default Home;
