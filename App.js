import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'cheese'},
    {id: uuid(), text: 'wine'},
    {id: uuid(), text: 'couscous'},
    {id: uuid(), text: 'Gateau'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
  },
});
export default App;
