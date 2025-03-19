import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem vindo à tela inicial!</Text>
      <Text>{"\n"}</Text>
      <Image
        source={{
          uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/what-no-face-in-spirited-away-represents-explained-feature.jpg",
        }}
        style={{
          height: 500,
          width: 300,
        }}
      />
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>Hoje veremos a aula seguinte de Native!</Text>
      <Text>{"\n"}</Text>

      <Button 
      title="Olá"
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontWeight: 700,
  },
});
