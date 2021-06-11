import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import { listener, listener2 } from "../support/component-lifecycle";

export default () => {
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const handleUpdatingCount = () => {
      setUpdateCount(c => c+1);
    }

    const listenItvl = listener(handleUpdatingCount);

    return () => listenItvl();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
    </View>
  );
};
