import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AddButton = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        testID="input"
        onChangeText={props.entry}
        style={styles.input}
        placeholder={props.holder}
        placeholderTextColor="#FE5D26"
        ref={props.onClean}
      />
      <TouchableOpacity
        testID="button"
        style={styles.button}
        onPress={props.onSubmit}>
        <Text style={styles.todo}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: '#fe5d26',
    borderRadius: 5,
  },
  input: {
    margin: 10,
    padding: 10,
    backgroundColor: '#faedca',
    borderRadius: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FAEDCA',
    borderRadius: 5,
  },
  todo: {
    color: '#FE5D26',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});

export {AddButton};
