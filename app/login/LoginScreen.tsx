import { View, Text, Button, Modal, ActivityIndicator } from "react-native";
import React from "react";
import { useLoginMutation } from "../../store/api";
import { IRootStackScreenProps } from "../AppNavigation";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../store/auth";

export default function LoginScreen({
  navigation,
}: IRootStackScreenProps<"login">) {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  return (
    <View>
      <View style={{ marginBottom: 16 }}>
        <Button
          title="Login Success"
          disabled={isLoading}
          onPress={() => {
            console.log("here");
            dispatch(setAuthToken("testing"));
          }}
        />
      </View>

      <View style={{ marginBottom: 16 }}>
        <Button
          title="Login Error"
          disabled={isLoading}
          onPress={() =>
            login({
              username: "09254052523",
              password: "12345678",
            })
          }
        />
      </View>

      <Button
        title="Term"
        onPress={() => {
          navigation.navigate("term");
        }}
      />
      <Modal visible={isLoading} transparent>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <ActivityIndicator size="large" color={"green"} />
        </View>
      </Modal>
    </View>
  );
}
