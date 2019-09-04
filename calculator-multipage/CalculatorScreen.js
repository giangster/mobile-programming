import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class CalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { no1: 0, no2: 0, result: "", history: [] };
  }

  buttonPlus = () => {
    this.setState({
      result: `${this.state.no1} + ${this.state.no2} = ${this.state.no1 +
        this.state.no2}`,
      history: [...history, this.state.result],
      no1: 0,
      no2: 0
    });
  };

  buttonMinus = () => {
    this.setState({
      result: `${this.state.no1} - ${this.state.no2} = ${this.state.no1 -
        this.state.no2}`,
      history: [...history, this.state.result],
      no1: 0,
      no2: 0
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
          onChangeText={no1 => this.setState({ no1: parseInt(no1) })}
          value={this.state.no1}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={no2 => this.setState({ no2: parseInt(no2) })}
          value={this.state.no2}
          keyboardType="number-pad"
        />
        <View style={styles.buttonContainer}>
          <Button onPress={this.buttonPlus} title="+" />
          <Button color="#FE434C" onPress={this.buttonMinus} title="-" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
