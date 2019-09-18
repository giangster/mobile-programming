import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Button,
  AsyncStorage
} from "react-native";

const App = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(1);

  const checkNumber = () => {
    if (number < Math.floor(Math.random() * 10) + 1) {
      setResult(`Your guess ${number} is too low`);
      setCount(count + 1);
      saveCount();
    } else if (number > Math.floor(Math.random() * 10) + 1) {
      setResult(`Your guess ${number} is too high`);
      setCount(count + 1);
      saveCount(count);
    } else {
      Alert.alert(`You guessed the number in ${count} guesses`);
      readCount();
    }
  };

  const saveCount = async count => {
    try {
      await AsyncStorage.setItem("count", JSON.stringify(count));
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  const readCount = async () => {
    try {
      let value = awaitAsyncStorage.getItem("count");
      return `Highscore: ${value} guesses`;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>
        Guess number between 1-100
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setNumber(parseInt(text))}
        value={number}
        keyboardType="number-pad"
      />
      <Button onPress={checkNumber} title="Make guess" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: 200,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    margin: 5,
    marginBottom: 15
  }
});

export default App;
