import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

import { listener, listener2 } from "../support/component-lifecycle";

export default () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [listener, setListener] = useState('cat');

  useEffect(() => {
    setUpdateCount(0);

    const handleUpdatingCount = () => {
      setUpdateCount(c => c+1);
    }

    const listenItvl = listener2(listener, handleUpdatingCount);

    return () => listenItvl();
  }, [listener]);



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
      <Text>Currently listening to the {listener} listener.</Text>
      <Button 
        title='CHANGE LISTENER NAME'
        onPress={() => setListener(l => {
          if (l==='cat') return 'dog'
          return 'cat'
        })}
      />
    </View>
  );
};
