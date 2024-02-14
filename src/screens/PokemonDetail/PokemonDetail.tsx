import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

function PokemonDetail({route}): React.JSX.Element {
  const ScreenHeight = Dimensions.get('window').height;
  const ScreenWidth = Dimensions.get('window').width;

  const {itemId} = route.params;

  return (
    <View style={styles.container} >
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#19c4ac', '#56ccb1', '#9fe0b9']}
        style={[
          styles.linearGradient,
          {height: ScreenHeight},
        ]}></LinearGradient>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Bulbasaur</Text>
        </View>
      </View>
      <View style={[styles.statscontainer]}>
        <Text>Hello</Text>
        <View >
          {/* <FastImage
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'red',
              position: 'absolute',
              top: 10,
            }}
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  statscontainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
  imageContainer: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  titleText: {
    height: 350, 
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  titleContainer: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  linearGradient: {
    zIndex: 0,
    width: 400,
    position: 'absolute',
    height: 120,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    display: 'flex',
  },
});

export default PokemonDetail;
