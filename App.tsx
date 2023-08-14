import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import AppNavigation from "./app/AppNavigation";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppNavigation />
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
