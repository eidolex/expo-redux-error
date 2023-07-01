import { View, Text, Button, Modal, ActivityIndicator } from "react-native";
import React from "react";
import { useLoginMutation } from "../../store/api";

export default function LoginScreen() {
  const [login, { isLoading }] = useLoginMutation();
  return (
    <View>
      <View style={{ marginBottom: 32 }}>
        <Button
          title="Login Success"
          disabled={isLoading}
          onPress={() =>
            login({
              username: "09254025253",
              password: "12345678",
            })
          }
        />
      </View>
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
