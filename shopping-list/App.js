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
  const [shoppingItem, setItem] = useState("");
  const [shoppingList, setList] = useState([]);

  const addItem = () => {
    setList([...shoppingList, { shoppingItem: shoppingItem }]);
  };

  const deleteList = () => {
    setList([]);
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
        onChangeText={item => setItem(item)}
        value={shoppingItem}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={addItem} title="Add" />
        <Button color="#FE434C" onPress={deleteList} title="Clear" />
      </View>
      <Text>Shopping List</Text>
      <FlatList
        data={shoppingList}
        renderItem={({ item, key }) => (
          <Text index={key}>{item.shoppingItem} </Text>
        )}
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
