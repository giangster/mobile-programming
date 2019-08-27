import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

const App = () => {
  const [no1, setText1] = useState(0);
  const [no2, setText2] = useState(0);
  const [data, setData] = useState([]);

  const buttonPlus = () => {
    setData([...data, { result: `${no1} + ${no2} = ${no1 + no2}` }]);
  };

  const buttonMinus = () => {
    setData([...data, { result: `${no1} - ${no2} = ${no1 - no2}` }]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          margin: 1
        }}
        onChangeText={text => setText1(parseInt(text))}
        value={no1}
        keyboardType="number-pad"
      />
      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          margin: 1
        }}
        onChangeText={text => setText2(parseInt(text))}
        value={no2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={buttonPlus} title="+" />
        <Button color="#FE434C" onPress={buttonMinus} title="-" />
      </View>
      <Text>History</Text>
      <FlatList
        data={data}
        renderItem={({ item, key }) => <Text index={key}>{item.result} </Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: { flexDirection: "row" }
});

export default App;
