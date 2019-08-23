import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [no1, no2, result, setText] = useState("");

  const buttonPlus = () => {
    result = no1 + no2;
  };

  const buttonMinus = () => {
    result = no1 - no2;
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1, margin: 2 }}
        onChangeText={no1 => setText(no1)}
        value={no1}
        keyboardType={"numeric"}
      />
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1, margin: 2 }}
        onChangeText={no2 => setText(no2)}
        value={no2}
        keyboardType={"numeric"}
      />
      <Button onPress={buttonPlus} title="+" />
      <Button onPress={buttonMinus} title="-" />
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
