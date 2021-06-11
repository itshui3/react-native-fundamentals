import React from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";

import { useFetchPeople } from './_fetchPeople';

export default () => {
  const [people] = useFetchPeople("https://randomuser.me/api/?results=100&inc=name");

  return (
    <SafeAreaView style={{flex: 1}}>
      {
        people.length > 0
        ?
        (
          <FlatList
            data={people}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <Text style={styles.name}>
                  {item.name.title} {item.name.first} {item.name.last}
                </Text>
              </View>
            );
          }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )
        :
          (          
            <SafeAreaView
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <ActivityIndicator size="large" color='rgba(0, 0, 0, 0.2)' />
            </SafeAreaView>
          )
          
      }

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
});

/*
const results = [{"name":{"title":"Mr","first":"Guillaume","last":"Leclercq"}},{"name":{"title":"Mr","first":"Marcos","last":"Medina"}},{"name":{"title":"Mrs","first":"Amy","last":"Lam"}},{"name":{"title":"Mrs","first":"Dores","last":"Jesus"}},{"name":{"title":"Monsieur","first":"Willi","last":"Robert"}},{"name":{"title":"Mr","first":"محمدامين","last":"علیزاده"}},{"name":{"title":"Mr","first":"Cameron","last":"Cooper"}},{"name":{"title":"Mrs","first":"Charlotte","last":"Anderson"}},{"name":{"title":"Ms","first":"Lea","last":"Andersen"}},{"name":{"title":"Miss","first":"Katarzyna","last":"Schneller"}},{"name":{"title":"Ms","first":"Asta","last":"Kristensen"}},{"name":{"title":"Mr","first":"Kenan","last":"Doğan"}},{"name":{"title":"Mrs","first":"Silvia","last":"Herrera"}},{"name":{"title":"Miss","first":"Tessa","last":"Blok"}},{"name":{"title":"Mr","first":"Iker","last":"Vazquez"}},{"name":{"title":"Mr","first":"عرشيا","last":"سالاری"}},{"name":{"title":"Mrs","first":"Ellen","last":"Wells"}},{"name":{"title":"Mr","first":"Reginald","last":"Snyder"}},{"name":{"title":"Miss","first":"Crystal","last":"Obrien"}},{"name":{"title":"Mr","first":"Isak","last":"Brustad"}},{"name":{"title":"Mr","first":"Atif","last":"Dolleman"}},{"name":{"title":"Mr","first":"Isaac","last":"Wang"}},{"name":{"title":"Madame","first":"Janina","last":"Denis"}},{"name":{"title":"Ms","first":"Ella","last":"Brooks"}},{"name":{"title":"Mrs","first":"Irene","last":"Reyes"}},{"name":{"title":"Mrs","first":"Encarnacion","last":"Ortiz"}},{"name":{"title":"Miss","first":"Debra","last":"Nguyen"}},{"name":{"title":"Mr","first":"Howard","last":"Yildirim"}},{"name":{"title":"Ms","first":"Dieneke","last":"Vels"}},{"name":{"title":"Ms","first":"Jane","last":"Perry"}},{"name":{"title":"Mrs","first":"Mestan","last":"Ilıcalı"}},{"name":{"title":"Mr","first":"Pelle","last":"Hesjedal"}},{"name":{"title":"Miss","first":"Faiza","last":"Koenderink"}},{"name":{"title":"Miss","first":"Faustine","last":"Denis"}},{"name":{"title":"Ms","first":"Ortrud","last":"Wieland"}},{"name":{"title":"Miss","first":"Patricia","last":"Walters"}},{"name":{"title":"Mr","first":"Otto","last":"Eskola"}},{"name":{"title":"Mrs","first":"Marita","last":"Schei"}},{"name":{"title":"Miss","first":"Tülay","last":"Bechtold"}},{"name":{"title":"Mr","first":"Tilmann","last":"Prause"}},{"name":{"title":"Mr","first":"Alberto","last":"Gomez"}},{"name":{"title":"Mr","first":"Jaxon","last":"Robinson"}},{"name":{"title":"Monsieur","first":"Bernd","last":"Gautier"}},{"name":{"title":"Mrs","first":"Amy","last":"Macdonald"}},{"name":{"title":"Mrs","first":"Erika","last":"Sanchez"}},{"name":{"title":"Mr","first":"Shane","last":"Hoffman"}},{"name":{"title":"Mr","first":"Andreas","last":"Johansen"}},{"name":{"title":"Mr","first":"Nihal","last":"Bolatlı"}},{"name":{"title":"Mr","first":"Mark","last":"Herrera"}},{"name":{"title":"Miss","first":"Priscilla","last":"Alexander"}},{"name":{"title":"Mr","first":"Fernando","last":"Rubio"}},{"name":{"title":"Miss","first":"Kübra","last":"Velioğlu"}},{"name":{"title":"Ms","first":"Hilary","last":"De Waal"}},{"name":{"title":"Mr","first":"Muhsin","last":"Wijnhoven"}},{"name":{"title":"Mr","first":"Erik","last":"Weidner"}},{"name":{"title":"Miss","first":"Catherine","last":"Caldwell"}},{"name":{"title":"Mrs","first":"Irene","last":"Carmona"}},{"name":{"title":"Mr","first":"Cameron","last":"Martin"}},{"name":{"title":"Mrs","first":"Noélie","last":"Blanchard"}},{"name":{"title":"Miss","first":"Rachel","last":"Mckinney"}},{"name":{"title":"Mr","first":"Sigurd","last":"Stiegler"}},{"name":{"title":"Mrs","first":"Elvira","last":"Smistad"}},{"name":{"title":"Monsieur","first":"Theodor","last":"Clement"}},{"name":{"title":"Miss","first":"Sannah","last":"Garshol"}},{"name":{"title":"Mr","first":"Flávio","last":"Vieira"}},{"name":{"title":"Miss","first":"آنیتا","last":"رضایی"}},{"name":{"title":"Mrs","first":"Abigail","last":"Lopes"}},{"name":{"title":"Ms","first":"Rosa","last":"Cox"}},{"name":{"title":"Miss","first":"Hafsa","last":"Frøshaug"}},{"name":{"title":"Mrs","first":"Virginia","last":"Navarro"}},{"name":{"title":"Mr","first":"Michael","last":"Miles"}},{"name":{"title":"Ms","first":"Suzanna","last":"Byrd"}},{"name":{"title":"Mr","first":"Sebastian","last":"Olsen"}},{"name":{"title":"Ms","first":"Andrea","last":"Fernandez"}},{"name":{"title":"Miss","first":"Karla","last":"Figenschou"}},{"name":{"title":"Miss","first":"Ariana","last":"Harris"}},{"name":{"title":"Monsieur","first":"Johann","last":"Gaillard"}},{"name":{"title":"Monsieur","first":"Anton","last":"Martinez"}},{"name":{"title":"Mrs","first":"Traudl","last":"Kimmel"}},{"name":{"title":"Miss","first":"Avery","last":"Mitchell"}},{"name":{"title":"Mr","first":"Ritthy","last":"Brooks"}},{"name":{"title":"Mr","first":"Freddy","last":"Kreis"}},{"name":{"title":"Mr","first":"حامد","last":"قاسمی"}},{"name":{"title":"Mrs","first":"Beatrice","last":"Gagné"}},{"name":{"title":"Mr","first":"Connor","last":"Anderson"}},{"name":{"title":"Ms","first":"Debra","last":"Patterson"}},{"name":{"title":"Mr","first":"پوریا","last":"كامياران"}},{"name":{"title":"Mr","first":"رضا","last":"کامروا"}},{"name":{"title":"Ms","first":"Noélie","last":"Petit"}},{"name":{"title":"Ms","first":"Rose","last":"Montgomery"}},{"name":{"title":"Mr","first":"Winston","last":"Loeve"}},{"name":{"title":"Mrs","first":"Consuelo","last":"Campos"}},{"name":{"title":"Miss","first":"Milja","last":"Sakala"}},{"name":{"title":"Mr","first":"Sebastian","last":"Johansen"}},{"name":{"title":"Miss","first":"Andréa","last":"Blanchard"}},{"name":{"title":"Mr","first":"William","last":"Thaler"}},{"name":{"title":"Mr","first":"Magnus","last":"Thomsen"}},{"name":{"title":"Mr","first":"Barry","last":"Morales"}},{"name":{"title":"Mrs","first":"آیلین","last":"حیدری"}},{"name":{"title":"Ms","first":"یسنا","last":"یاسمی"}}],"info":{"seed":"57d574489705e41b","results":100,"page":1,"version":"1.3"}}
*/