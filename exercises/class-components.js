import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

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
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>{this.state.text + this.state.count}
            </Text>
            <Button
              title='Clicker'
              onPress={() => this.setState((prev) => {
                    return {count: prev.count+1};
                })}
              style={styles.button}
              color='white'
            />
          </View>
        );
    }
}

export default ClassComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center'
    },
    button: {
        color: 'black'
    }
});