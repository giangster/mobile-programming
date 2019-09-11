import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

class HistoryScreen extends Component {
  static navigationOptions = { title: "History" };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>History</Text>
        <FlatList
          data={params.history}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => <Text key={index}>{item} </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HistoryScreen;
