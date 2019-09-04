import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CalculatorScreen from "./CalculatorScreen";
import HistoryScreen from "./HistoryScreen";

const AppNavigator = createBottomTabNavigator({
  Calculate: { screen: CalculatorScreen },
  History: { screen: HistoryScreen }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "800" }}>Calculator</Text>
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
