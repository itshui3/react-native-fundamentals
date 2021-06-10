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

import { SafeAreaFrameContext } from 'react-native-safe-area-context';
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
          <RenderSection data={idPEOPLE} />
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
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'black' }} />}
        ListHeaderComponent={(
          <View 
            style={{ 
              height: 50, 
              backgroundColor: 'rgba(0, 0, 0, 0.01)', 
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{ fontSize: 20 }}
            >FlatList of Names
            </Text>
          </View>
        )}
        ListFooterComponent={(
          <View
            style={{
              height: 50,
              backgroundColor: 'rgba(0, 0, 0, 0.01)', 
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text>
              End.
            </Text>
          </View>
        )}
      />
    </>
  );

}

const RenderSection = ({ data }) => {
  const _renderPeopleSection = ({ item }) => {
    return (<Item name={item.name} />)
  }

  const groupPeople = (groupData) => {

    const groupedData = groupData.reduce((acc, cur) => {
      const obj = { ...acc }

      if (acc[cur.name.last[0]]) {
        obj[cur.name.last[0]].push(cur);
      } else {
        obj[cur.name.last[0]] = [cur];
      }

      return obj;
    }, {});

    const parsedGroupedData = Object.entries(groupedData).map(([title, records]) => {
      return {
        title,
        data: records
      }
    });

    return parsedGroupedData.sort((a, b) => {
      return a.title > b.title;
    });

  }

  return (
    <SectionList
      sections={groupPeople(data)}
      renderSectionHeader={({ section }) => {
        return (
          <View>
            <Text>{section.title}</Text>
          </View>
        )
      }}
      renderItem={_renderPeopleSection}
      keyExtractor={(item) => item.key}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'black' }} />}
    />
  );
}

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
  },
  text: {
    // textDecorationLine: 'underline'
  },
  header: {
    fontWeight: 'bold'
  }
});