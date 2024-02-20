import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Arrow from '../../assets/icons/Arrow.svg';

const BackButton = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
      <Arrow width={30} height={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19c4ac',
  },
});

export default BackButton;
