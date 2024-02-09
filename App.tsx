/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Feed from './src/screens/Feed/Feed';
import Article from './src/screens/Article/Article';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Helloworld from './src/screens/Home/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      id="HomeNavigator"
      initialRouteName="HelloWorld"
      backBehavior="order"
      detachInactiveScreens={true}
      // drawerPosition={right}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#d1d1d1',
        },
        drawerPosition: 'left',
        // drawerStatusBarAnimation: 'fade',
        // drawerType: "slide",
        // overlayColor: 'transparent',
      }}>
      <Drawer.Screen name="HelloWorld" component={Helloworld} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyDrawer />
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
