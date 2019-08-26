import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, Button } from "react-native";

const App = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(1);

  const checkNumber = () => {
    if (number < Math.floor(Math.random() * 100) + 1) {
      setResult(`Your guess ${number} is too low`);
      setCount(count + 1);
    } else if (number > Math.floor(Math.random() * 100) + 1) {
      setResult(`Your guess ${number} is too high`);
      setCount(count + 1);
    } else {
      Alert.alert(`You guessed the number in ${count} guesses`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <Text>Guess number between 1-100</Text>
      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          margin: 2
        }}
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
  }
});

export default App;
