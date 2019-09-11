import React, { Component } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback
} from "react-native";

class CalculatorScreen extends Component {
  static navigationOptions = {
    title: "Calculate"
  };

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
    const { navigate } = this.props.navigation;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={{ fontSize: 18, fontWeight: "600", margin: 20 }}>
            Calculator
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={no1 => this.setState({ no1 })}
            value={this.state.no1}
            keyboardType="numeric"
            clearButtonMode="always"
            onSubmitEditing={Keyboard.dismiss}
          />
          <TextInput
            style={styles.input}
            onChangeText={no2 => this.setState({ no2 })}
            value={this.state.no2}
            keyboardType="numeric"
            clearButtonMode="always"
            onSubmitEditing={Keyboard.dismiss}
          />
          <View style={styles.buttonContainer}>
            <Button onPress={this.buttonPlus} title="+" />
            <Button color="#FE434C" onPress={this.buttonMinus} title="-" />
          </View>
          <View>
            <Button
              onPress={() =>
                navigate("History", { history: this.state.history })
              }
              title="History"
            />
          </View>
          <Text style={{ fontSize: 18, fontWeight: "600", margin: 20 }}>
            Result
          </Text>
          <View style={{ flex: 2 }}>
            <Text>{this.state.result}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    marginBottom: 15,
    height: 40,
    fontSize: 38,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    margin: 1
  },
  buttonContainer: { flexDirection: "row" }
});

export default CalculatorScreen;
