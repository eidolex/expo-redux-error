import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { removeAuthToken } from "../../store/auth";

export default function HomeScreen() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        title="logout"
        onPress={() => {
          dispatch(removeAuthToken());
        }}
      />
    </View>
  );
}
