import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  const buttonPressed = () => {
    Alert.alert("You are crazy!!!!" + text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button onPress={buttonPressed} title="Press me sensei" />
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
