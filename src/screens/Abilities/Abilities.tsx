import BackButton from '../../components/Button/BackButton';
import Section from '../../components/Section/Section';
import {StyleSheet, Text, View} from 'react-native';
import PokemonCard from '../PokemonCard/PokemonCard';
import {ScrollView} from 'react-native-gesture-handler';

function Abilities(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} >
      <Section title='Abilities' >
          <Text>Abilities</Text>
      </Section>
        <PokemonCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1200,
  },
});

export default Abilities;
