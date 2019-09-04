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

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
