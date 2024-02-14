import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function BackButton(): React.JSX.Element {
  const navigation = useNavigation();

  return <Button title="Go back" onPress={() => navigation.goBack()} />;
}

export default BackButton;
