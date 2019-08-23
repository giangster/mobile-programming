import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

buttonPlus = () => {
  result = parseInt(no1) + parseInt(no2);
  resultShow = true;
  return result;
};

buttonMinus = () => {
  result = parseInt(no1) - parseInt(no2);
  resultShow = true;
  return result;
};

export default function App() {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  let result = useState(0);
  let resultShow = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1, margin: 2 }}
        onChange={no1 => setNo1(no1)}
        value={no1}
        keyboardType="numeric"
      />
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1, margin: 2 }}
        onChange={no2 => setNo2(no2)}
        value={no2}
        keyboardType="numeric"
      />
      <Button onPress={buttonPlus} title="+" />
      <Button onPress={buttonMinus} title="-" />
      {resultShow && <Text>{result}</Text>}
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
