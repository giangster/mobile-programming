import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  Image
} from "react-native";

const App = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipe] = useState([]);

  const findRecipe = () => {
    const url = `http://www.recipepuppy.com/api/?i=${ingredient}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setRecipe(responseJson.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View>
          {recipes ? (
            <FlatList
              style={{ marginLeft: "5%" }}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                <Text key={index}>
                  <Image
                    style={{ width: 50, height: 50, margin: 10 }}
                    source={{ uri: `${item.thumbnail}` }}
                  />
                  {item.title}
                </Text>
              )}
              data={recipes}
            />
          ) : null}
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            value={ingredient}
            placeholder="Ingredient"
            onChangeText={ingredient => setIngredient(ingredient)}
          />
          <Button onPress={findRecipe} title="Find recipe"></Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: 300,
    height: 35,
    fontSize: 30,
    borderColor: "gray",
    borderWidth: 1,
    margin: 5,
    marginBottom: 15
  }
});

export default App;
