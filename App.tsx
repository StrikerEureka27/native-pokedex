import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import Home from './src/screens/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AnimatedBootSplash from './src/screens/SplashScreen/SplashScreen';
import Profile from './src/screens/Profile/Profile';
import PokemonDetail from './src/screens/PokemonDetail/PokemonDetail';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      id="HomeNavigator"
      initialRouteName="Home"
      backBehavior="order"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: '#FF0000',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{
          title: 'Details',
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  return (
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
  );
}

const AppWrapper = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
