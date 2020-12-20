import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ToDoCard = (props) => {
  return (
    <TouchableOpacity
      style={props.work.isDone ? styles.disabledContainer : styles.container}
      onPress={props.onDone}
      onLongPress={props.onClear}>
      <Text style={props.work.isDone ? styles.disabledText : styles.text}>
        {props.work.activity}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderRadius: 5,
    backgroundColor: '#ef6c00',
    marginVertical: 10,
  },
  text: {
    padding: 10,
    color: '#faedca',
    fontWeight: 'bold',
  },
  disabledContainer: {
    borderColor: 'red',
    borderRadius: 5,
    backgroundColor: '#ffcc80',
    marginVertical: 10,
  },
  disabledText: {
    padding: 10,
    color: 'white',
    fontWeight: '100',
    textDecorationLine: 'line-through',
  },
});

export {ToDoCard};
