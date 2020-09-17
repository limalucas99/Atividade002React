import { StatusBar, setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [counter, setCounter] = useState(10);

  const [number, setNumber] = useState('');
  const getNumber = number => {setNumber(number)}

  const [name, setName] = useState('');
  const getName = name => {setName(name)};



  const addContact = () => {
    setContacts(contacts => {
      setCounter(counter + 2);
      return [...contacts, {key: counter.toString(), value: {name, number}}]
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>

        <TextInput style={styles.input} 
          placeholder="Digite o nome"
          value={name}
          onChangeText={getName}
        />

        <View>
          <TextInput style={styles.input}
            value={number}
            placeholder="Digite o número"
            onChangeText={getNumber}
          />        
        </View>

        <Button
          title="Enviar"
          onPress={addContact}
        />
      </View>
      <FlatList 
        data={contacts}
        renderItem={
          (contact) => (
            <View style={styles.contactsList}>
              <Text>{contact.item.value.name}</Text>
              <Text>{contact.item.value.number}</Text>
            </View>
          )
        }
      />        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputView: {
    marginBottom: 8
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 4,
    padding: 12,
    textAlign: 'center',
  },
  contactsList: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
});
