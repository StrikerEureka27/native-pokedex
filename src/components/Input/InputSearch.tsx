import {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import Section from '../Section/Section';

function InputSearch(): React.JSX.Element {
  const [text, onChangeText] = useState('');

  return (
      <View style={styles.viewStyle} >
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="🔎 Search Pokemon, Ability..."
      />
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: 'black', 
    padding: 15, 
    height: 52,
    fontSize: 15, 
    textAlign: 'left',
    justifyContent: 'center',
    margin: 12,
    borderWidth: 1,
    borderRadius: 10, 
    backgroundColor: 'white'
  },
  viewStyle: {
    padding: 5,
    backgroundColor: 'red',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  }
});

export default InputSearch;
