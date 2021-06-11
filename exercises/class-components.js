import React from "react";
import { View, Text, Button } from "react-native";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Count: ",
            count: 0
        };
    }

    render() {
        return (
          <View>
            <Text>{this.state.text + this.state.count}</Text>
            <Button
              title='Clicker'
              onPress={() => this.setState((prev) => {
                    return {count: prev.count+1};
                })}
            />
          </View>
        );
    }
}

export default ClassComponent;