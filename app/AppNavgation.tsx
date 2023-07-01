import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login/LoginScreen";
import HomeScreen from "./home/HomeScreen";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../store/auth";
import { NavigationContainer } from "@react-navigation/native";
import { selectHasError } from "../store/error";
import ErrorScreen from "./ErrorScreen";
const Stack = createStackNavigator();

export default function AppNavgation() {
  const authToken = useSelector(selectAuthToken);
  const hasError = useSelector(selectHasError);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {hasError ? (
          <Stack.Screen name="error" component={ErrorScreen} />
        ) : authToken ? (
          <Stack.Screen name="home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
