// Creating a Custom Component
import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

export default () => {

  const sayHello = () => {
    Alert.alert('Hello Alert', 'hello!');
  }

  const sayGoodbye = () => {
    Alert.alert('Goodbye Alert', 'goodbye!');
  }

  return (
    <>
      <CustomButton
        text='Say hello'
        onPress={sayHello}
        buttonStyle={helloStyles}
      />
      <CustomButton
        text='Say goodbye'
        onPress={sayGoodbye}
        buttonStyle={goodbyeStyles}
      />
    </>
  )

};

const CustomButton = ({ onPress, text, buttonStyle }) => {

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{...buttonStyle, ...buttonStyles}}
    >
      <Text style={{ color: 'white' }}>{text}</Text>
    </TouchableOpacity>
  )
}

const buttonStyles = {
  alignSelf: 'center',
  width: 150,
  height: 75,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 25
}

const helloStyles = {
  backgroundColor: 'pink',
}

const goodbyeStyles = {
  backgroundColor: 'turquoise',
}