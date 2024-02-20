import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AngleSmallLeft  from '../../assets/icons/AngleSmallLeft.svg';

const BackButton = (): JSX.Element => {
  const navigation = useNavigation();

  

  return <TouchableOpacity  onPress={() => navigation.goBack()} >
    <AngleSmallLeft style={styles.container} width={40} height={40}  fill="white"/>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
    backgroundColor: 'black'
  }
})

export default BackButton;
