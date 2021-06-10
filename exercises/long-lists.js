import React, { useState } from 'react';
import { 
  FlatList, 
  SectionList, 
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import _ from "lodash";

import { PEOPLE } from './long-list-people';

const idPEOPLE = PEOPLE.map(person => {
  return {
    name: person.name,
    key: _.uniqueId()
  }
});

const C = {
  flat: 'FLAT',
  section: 'SECTION'
}

export default () => {

  const [listType, setListType] = useState(C.flat);

  const switchListType = () => {

    setListType(t => {
      if (t === C.flat) {
        return C.section;
      }
      return C.flat;
    });

  }

  return (
    <>
      <Button
        title={
          listType === C.flat
          ?
            'Render Section'
          :
            'Render Flat'
        }
        onPress={switchListType}
      />
      {
        listType === C.flat
        ?
          <RenderFlat data={idPEOPLE} />
        :
          // <RenderSection data={idPEOPLE} />
          null
      }

    </>
  );
}

const RenderFlat = ({ data }) => {

  const _renderPeopleFlat = ({ item }) => {
    return (<Item name={item.name} />);
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={_renderPeopleFlat}
        keyExtractor={(item) => item.key}
      />
    </>
  );

}

// const RenderSection = ({ data }) => {
//   const _renderPeopleSection = ({ item }) => {
//     return (<Item name={item.name} />)
//   }

//   const _renderSectionHeader = ({ name }) => {
//     name.last[0];
//   }

//   return (
//     <SectionList
//       sections={data}
//       keyExtractor={(item) => item.key}
//       renderItem={_renderPeopleSection}
//       renderSectionHeader={<Text>header</Text>}
//     />
//   );
// }

const Item = ({ name }) => {

  return (
    <View style={ItemStyle.container}>
      <Text style={ItemStyle.text}>{`${name.title} ${name.first} ${name.last}`}</Text>
    </View>
  );

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
  },
  header: {
    fontWeight: 'bold'
  }
});