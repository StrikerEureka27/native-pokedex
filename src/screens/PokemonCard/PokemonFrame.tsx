import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';


function PokemonFrame(): React.JSX.Element {
  return (
    <View style={styles.container} >
        <FastImage
      style={{width: 250, height: 250}}
      source={{
        uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex'
    }
})


export default PokemonFrame;
