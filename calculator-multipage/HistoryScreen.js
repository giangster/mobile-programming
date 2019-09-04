import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>History</Text>
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
