import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import SegundoComponente from "./componentes/SegundoComponente";
import TerceiroComponente from "./componentes/TerceiroComponente";
import JavascriptComponent from "./componentes/JavascriptComponent";
import Perfil from "./componentes/Perfil";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.exemplo}>
        <PrimeiroComponente />
        <SegundoComponente />
        <TerceiroComponente />
      </View>
      <StatusBar style="auto" />

      <View style={styles.idade}>
        <JavascriptComponent />
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Perfil nome="Pedro" idade="22" email="jorge@gamil.com" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  exemplo: {
    backgroundColor: "rgba(106, 90, 205, 0.85)",
    padding: 50,
  },
  idade: {
    backgroundColor: "#fff",
    padding: 50,
    marginTop: 15,
  },
});
