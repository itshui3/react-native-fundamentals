// Capturing User Taps
import React from 'react';
import { Button, Text, TouchableOpacity, Alert, StyleSheet, Dimensions } from "react-native";
// TIP: Button is a component exposed by React Native. You'll import it the same way you did View
// and Text previously.

export default () => {
  // Replace return null with your code.

  const alertHello = () => {
    Alert.alert('Hello Alert', 'Hellow!')
  }

  // return (
  //   <Button
  //     title='My Button'
  //     onPress={alertHello}
  //   />
  // )

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={alertHello}
    >
      <Text style={{ color: '#fff', fontSize: 18 }}>Click Me</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});