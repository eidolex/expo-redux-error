import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken, setTerm } from "../store/auth";
import { IRootStackScreenProps } from "./AppNavigation";

export default function TermScreen({
  navigation,
}: IRootStackScreenProps<"term">) {
  const authToken = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  function onAccept() {
    dispatch(setTerm(true));
    navigation.navigate("home");
  }
  return (
    <View>
      <Text>TermScreen</Text>

      {authToken && (
        <View style={{ marginBottom: 16 }}>
          <Button title="Accept" onPress={() => onAccept()} />
        </View>
      )}
    </View>
  );
}
