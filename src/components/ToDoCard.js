import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ToDoCard = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      //   onPress={}
      onLongPress={props.onClear}>
      <Text style={styles.text}>{props.work.activity}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderRadius: 5,
    backgroundColor: '#839791',
    marginVertical: 10,
  },
  text: {
    padding: 10,
    color: '#faedca',
    fontWeight: 'bold',
  },
});

export {ToDoCard};
