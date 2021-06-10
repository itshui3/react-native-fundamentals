import React from 'react';
import { 
  FlatList, 
  // SectionList, 
  // Text 
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

  React.useEffect(() => {
    console.log('called long-list component')
  }, []);

  const _renderPeople = ({ item }) => {

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