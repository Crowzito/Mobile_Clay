import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { PaperProvider } from "react-native-paper";
import StackRoutes from "./routers/StackRoutes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </PaperProvider>
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
