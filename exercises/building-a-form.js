
import React, { useState } from 'react';
import { Text, TextInput, Button, Alert, View, StyleSheet } from 'react-native';

export default () => {

    const [name, setName] = useState('');

    const alertHello = () => {
        Alert.alert(`Hello, ${name}`);
        setName('');
    }

    const handleInput = (text) => {
        setName(text);
    }

    return (
      <>
        <View style={formStyles.container}>
          <Text
            style={formStyles.text}
          >What is your name?
          </Text>
          <TextInput 
            style={formStyles.input}
            value={name}
            onChangeText={handleInput}
            placeholder='John Doe'
          />
          <Button
            title='Say Hello'
            onPress={alertHello}
            style={formStyles.button}
          />
        </View>
      </>
    )
}

const formStyles = StyleSheet.create({
    container: {
        margin: 25
    },

    text: {
        fontWeight: 'bold',
        marginVertical: 15
    },

    input: {
        height: 50,
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 5
    },

    button: {
        borderRadius: 15
    }
});