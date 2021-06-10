import React from 'react';
import { 
  FlatList, 
  // SectionList, 
  Text,
  View,
  StyleSheet,
} from 'react-native';
import _ from "lodash";

import { PEOPLE } from './long-list-people';

const idPEOPLE = PEOPLE.map(person => {
  return {
    name: person.name,
    key: _.uniqueId()
  }
})

export default () => {

  const _renderPeople = ({ item }) => {
    return (<Item name={item.name} />);
  }

  return (
    <>
      <FlatList
        data={idPEOPLE}
        renderItem={_renderPeople}
        keyExtractor={(item) => item.key}
      />
    </>
  )
}

const Item = ({ name }) => {

  return (
    <View style={ItemStyle.container}>
      <Text style={ItemStyle.text}>{`${name.title} ${name.first} ${name.last}`}</Text>
    </View>

  )
}

const ItemStyle = StyleSheet.create({
  container: {
    height: 30,
    paddingLeft: 15,
    justifyContent: 'flex-end',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  text: {
    // textDecorationLine: 'underline'
  }
})