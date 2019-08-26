import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no1: 0,
      no2: 0,
      result: 0,
      resultShow: false
    };
  }

  buttonPlus = () => {
    let temp = this.state.no1 + this.state.no2;

    this.setState({
      result: temp,
      resultShow: true
    });
    console.log(this.state);
  };

  buttonMinus = () => {
    let temp = this.state.no1 - this.state.no2;

    this.setState({
      result: temp,
      resultShow: true
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            margin: 2
          }}
          onChangeText={text => this.setState({ no1: parseInt(text) })}
          value={this.state.no1}
          keyboardType="number-pad"
        />
        <TextInput
          style={{
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            margin: 2
          }}
          onChangeText={text => this.setState({ no2: parseInt(text) })}
          value={this.state.no2}
          keyboardType="number-pad"
        />
        <Button onPress={this.buttonPlus} title="+" />
        <Button onPress={this.buttonMinus} title="-" />
        {this.state.resultShow && <Text>{this.state.result}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
