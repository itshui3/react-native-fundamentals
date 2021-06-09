import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

const squares = Array.from(new Array(15)).map((_, idx) => {return { text: `Square ${idx+1}`, key: idx }})

export default () => {

  return (
    <ScrollView>
      {
        squares.map(s => (
          <Square
            key={s.key}
            text={s.text}
          />
        ))
      }
    </ScrollView>
  )
};
