import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import AppNavgation from "./app/AppNavgation";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppNavgation />
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
