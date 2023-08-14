import { View, Text } from "react-native";
import React from "react";
import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import LoginScreen from "./login/LoginScreen";
import HomeScreen from "./home/HomeScreen";
import { useSelector } from "react-redux";
import { selectAuthToken, selectTerm } from "../store/auth";
import { NavigationContainer } from "@react-navigation/native";
import { selectHasError } from "../store/error";
import ErrorScreen from "./ErrorScreen";
import TermScreen from "./TermScreen";

type IRootStackParamList = {
  error: undefined;
  home: undefined;
  login: undefined;
  term: undefined;
};

export type IRootStackScreenProps<T extends keyof IRootStackParamList> =
  StackScreenProps<IRootStackParamList, T>;

const Stack = createStackNavigator<IRootStackParamList>();

export default function AppNavigation() {
  const authToken = useSelector(selectAuthToken);
  const hasError = useSelector(selectHasError);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {hasError ? (
          <Stack.Screen name="error" component={ErrorScreen} />
        ) : authToken ? (
          <>
            <Stack.Group>
              <Stack.Screen name="home" component={HomeScreen} />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
          </>
        )}
        <Stack.Screen
          navigationKey={authToken ? "user" : "guest"}
          name="term"
          component={TermScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
