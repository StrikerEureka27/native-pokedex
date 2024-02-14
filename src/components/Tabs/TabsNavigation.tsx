import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Moves from '../../screens/Moves/Moves';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Abilities from '../../screens/Abilities/Abilities';
import Items from '../../screens/Items/Items';
import Pokemons from '../../screens/Pokemons/Pokemons';

function MyCustomTabs({
  state,
  descriptors,
  navigation,
  position,
}): React.JSX.Element {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {state.routes.map((route, index) => (
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => {
            navigation.navigate(route.name);
          }}
          style={{
            margin: 10,
            borderBottomWidth: state.index === index ? 3 : 0,
            borderBottomColor: 'red'
          }}>
          <Text style={styles.tabText} > {route.name} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function NavigationTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      id="TabNavigator"
      initialRouteName="Pokemon"
      initialLayout={{
        width: Dimensions.get('window').width,
      }}
      style={styles.tabsStyle}
      tabBar={MyCustomTabs}>
      <Tab.Screen name="Pokémons" component={Pokemons} />
      <Tab.Screen name="Abilities" component={Abilities} />
      <Tab.Screen name="Moves" component={Moves} />
      <Tab.Screen name="Items" component={Items} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabsStyle: {
    height: 80,
  },
  tabContainer: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  button: {
    padding: 2,
    alignItems: 'center',
    borderBottomWidth: 2,
  },

  tabText: {
    fontWeight: 'bold',
    color: 'red'
  }

});

export default NavigationTabs;
