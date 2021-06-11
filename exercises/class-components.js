import React from "react";
import { View, Text } from "react-native";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Hello",
        };
    }

    render() {
        return (
          <View>
            <Text>{this.state.text}</Text>
          </View>
        );
    }
}

export default ClassComponent;