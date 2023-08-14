import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthToken, selectTerm } from "../../store/auth";
import { IRootStackScreenProps } from "../AppNavigation";

export default function HomeScreen({
  navigation,
}: IRootStackScreenProps<"home">) {
  // const dispatch = useDispatch();
  const term = useSelector(selectTerm);

  useEffect(() => {
    if (!term) {
      navigation.replace("term");
    }
  }, [term]);

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        title="logout"
        onPress={() => {
          // dispatch(removeAuthToken());
        }}
      />
    </View>
  );
}
