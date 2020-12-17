import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {AddButton, ToDoCard} from './components';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [text, setText] = useState('');

  const [counter, setCounter] = useState(0);

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    //useState'deki text bu şekilde alınır.
    const items = {
      id: Math.random().toString(),
      activity: text,
      isDone: false,
    };
    let copyList = [items, ...todos];

    setTodos(copyList);
    setCounter(copyList.length);
  };

  const renderTodo = ({item}) => {
    return <ToDoCard /*onClear={() => }*/ work={item} />;
  };

  return (
    <SafeAreaView style={{backgroundColor: '#faedca'}}>
      <View style={styles.header}>
        <Text style={styles.todo}>TODO</Text>
        <Text style={styles.todo}>{counter}</Text>
      </View>
      <View style={styles.main}>
        <FlatList
          testID="list"
          keyExtractor={(_, index) => index.toString()}
          data={todos}
          renderItem={renderTodo}
          ListEmptyComponent={<Text>There is nothing to do</Text>}></FlatList>
      </View>
      <View style={styles.footer}>
        <AddButton
          holder="Bir şeyler giriniz..."
          entry={(text) => setText(text)}
          onSubmit={() => addTodo(text)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Dimensions.get('screen').height * 0.1,
    borderBottomWidth: 2,
    borderBottomColor: '#FE5D26',
  },
  todo: {
    color: '#FE5D26',
    fontSize: 40,
  },
  main: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    height: Dimensions.get('screen').height * 0.6,
  },
  footer: {
    marginBottom: 10,
    height: Dimensions.get('screen').height * 0.3,
  },
});

export default App;
