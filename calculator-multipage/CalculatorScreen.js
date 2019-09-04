import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class CalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { no1: "", no2: "", result: "", history: [] };
  }

  buttonPlus = () => {
    let no1 = parseInt(this.state.no1);
    let no2 = parseInt(this.state.no2);

    this.setState({
      result: `${no1} + ${no2} = ${no1 + no2}`,
      history: [...this.state.history, this.state.result]
    });
  };

  buttonMinus = () => {
    let no1 = parseInt(this.state.no1);
    let no2 = parseInt(this.state.no2);

    this.setState({
      result: `${no1} - ${no2} = ${no1 - no2}`,
      history: [...this.state.history, this.state.result]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: "600", margin: 20 }}>
          Calculator
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={no1 => this.setState({ no1 })}
          value={this.state.no1}
          keyboardType="number-pad"
          clearButtonMode="always"
        />
        <TextInput
          style={styles.input}
          onChangeText={no2 => this.setState({ no2 })}
          value={this.state.no2}
          keyboardType="number-pad"
          clearButtonMode="always"
        />
        <View style={styles.buttonContainer}>
          <Button onPress={this.buttonPlus} title="+" />
          <Button color="#FE434C" onPress={this.buttonMinus} title="-" />
        </View>
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    marginBottom: 20,
    height: 50,
    fontSize: 48,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    margin: 1
  },
  buttonContainer: {
    flexDirection: "row"
  }
});

export default CalculatorScreen;
