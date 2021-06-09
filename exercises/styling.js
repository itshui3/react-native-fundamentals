// Styling
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => {

    return (
      <>
        <View style={{ 
            flex: 1,
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}
        >
          <Square text="Square 1" color='lightblue' />
          <Square text="Square 2" color='teal' />
          <Square text="Square 3" color='salmon' />
        </View>
      </>
    )
};

const Square = ({ text, color }) => {
    return (
      <>
        <View style={{ backgroundColor: color, ...SquareStyles.box }}>
          <Text>{text}</Text>
        </View>
      </>
    );
}

const SquareStyles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }
})