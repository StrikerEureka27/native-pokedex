import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IPokemonFrame} from '../../models/Pokemon.model';
import {SvgUri} from 'react-native-svg';
import {useState} from 'react';

const PokemonFrame = ({sprites}: IPokemonFrame): JSX.Element => {
  const [uri, setUri] = useState(sprites.other?.dream_world.front_default);

  return (
    <View style={styles.container}>
      {uri ? (
        <SvgUri
          onError={() =>
            setUri(
              'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg',
            )
          }
          width="110"
          height="110"
          uri={uri}
        />
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 80,
    justifyContent: 'center',
    alignContent: 'flex-end',
    display: 'flex',
  },
});

export default PokemonFrame;
