import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../components/Button/BackButton';
import NavigationTabs from '../../components/Tabs/TabsNavigation';
import About from './About';
import Evolution from './Evolution';
import Stats from './Stats';
import Location from './Location';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';
import Star from '../../assets/icons/Star.svg';


function PokemonDetail({route}): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  const {pokemonName} = route.params;

  const getPokemonWithTs = () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res =>
      res.json(),
    );
    
  const {isPending, error, data, refetch} = useQuery({
    queryKey: ['repoData'],
    queryFn: getPokemonWithTs,
  });

  const tabs = [
    {
      key: 1,
      name: 'About',
      component: About,
    },
    {
      key: 2,
      name: 'Stats',
      component: Stats,
    },
    {
      key: 3,
      name: 'Evolution',
      component: Evolution,
    },
    {
      key: 4,
      name: 'Location',
      component: Location,
    },
  ];

  return (
    <View style={styles.container}>
      {!isPending ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#19c4ac', '#56ccb1', '#9fe0b9']}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton}>
              <BackButton />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{data.name}</Text>
            <Text style={styles.headerTitle}> 
              <Star width={40} height={40}  fill="white"/>
             </Text>
          </View>

          <View style={styles.imageFrame}>
            <SvgUri width="250" height="250" uri={data.sprites.other?.dream_world.front_default} />
          </View>

          <View style={styles.detailsContainer}>
            <NavigationTabs
              idTab="details-navigation-tab"
              tabs={tabs}></NavigationTabs>
          </View>
        </LinearGradient>
      ) : (
        <Text>Is loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  imageFrame: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    height: 400,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  backButton: {
    backgroundColor: 'white',
  },
});

export default PokemonDetail;
