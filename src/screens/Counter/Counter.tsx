import React from 'react';
import {Text, Button} from 'react-native';
import type {RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import Section from '../../components/Section/Section';
import {decrement, increment} from '../../../AppSlice';
import BackButton from '../../components/Button/BackButton';

function Counter(): React.JSX.Element {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Section title="Counter">
      <Button
        title="Decrement"
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Text>{count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <BackButton />
    </Section>
  );
}


export default Counter;