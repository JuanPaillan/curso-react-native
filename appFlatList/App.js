import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  //datos para el elemento
  const elementos = Array.from({ length: 10 }, (_, i) => `Elemento ${i + 1}`);

  //funcion para renderizar cada elemento
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Elementos</Text>
      <FlatList
        data={elementos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false} //oculta el scroll bar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 30,
  },
  item: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 1,
    marginVertical: 5,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
