import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CalculatorScreen from "./CalculatorScreen";
import HistoryScreen from "./HistoryScreen";
import Icon from "react-native-ionicons";

const AppNavigator = createBottomTabNavigator(
  {
    Calculate: { screen: CalculatorScreen },
    History: { screen: HistoryScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Calculate") {
          return <Icon ios="ios-add" android="md-add" />;
        } else if (routeName === "History") {
          return <Ionicons name="settings" size={25} color={tintColor} />;
        }
      }
    })
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
