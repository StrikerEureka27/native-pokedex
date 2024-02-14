import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {StyleSheet} from 'react-native';
import Home from './src/screens/Home/Home';
import Moves from './src/screens/Moves/Moves';
import Items from './src/screens/Items/Items';
import Abilities from './src/screens/Moves/Moves';
import Pokemons from './src/screens/Pokemons/Pokemons';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AnimatedBootSplash from './src/screens/SplashScreen/SplashScreen';
import PokemonDetail from './src/screens/PokemonDetail/PokemonDetail';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      id="HomeNavigator"
      initialRouteName="Pokemons"
      backBehavior="order"
      detachInactiveScreens={true}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
          fontSize: 20,
          right: 70,
        },
        headerStyle: {
          backgroundColor: '#FF0000',
        },
        drawerPosition: 'left',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Your pokedex',
        }}
      />
      <Drawer.Screen name="Pokemons" component={Pokemons} />
      <Drawer.Screen name="Abilities" component={Abilities} />
      <Drawer.Screen name="Moves" component={Moves} />
      <Drawer.Screen name="Items" component={Items} />
      <Drawer.Screen
        name="PokemonDetail"
        options={{
          title: '',
        }}
        component={PokemonDetail}
      />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  return (
    <SafeAreaProvider>
      <NavigationContainer
        onReady={() => {
          setVisible(false);
        }}>
        {visible ? (
          <AnimatedBootSplash
            onAnimationEnd={() => {
              setVisible(false);
            }}
          />
        ) : (
          <MyDrawer />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const AppWrapper = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AppWrapper;
