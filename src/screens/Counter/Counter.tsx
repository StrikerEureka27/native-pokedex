import React from 'react';
import type {RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {Text, Button, View, StyleSheet} from 'react-native';
import BackButton from '../../components/Button/BackButton';
import {decrement, increment, incrementByAmount, logAndAdd} from '../Counter/CounterSlice';

function Counter(): React.JSX.Element {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <View style={styles.countContainer} >
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
      <Button
        title="LogAndAdd"
        onPress={() => {
          console.log('LogAndAdd press!')
          dispatch(logAndAdd(5));
          //dispatch(incrementByAmount(4))
        }}
      />
      </View>
      <BackButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  countContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default Counter;
