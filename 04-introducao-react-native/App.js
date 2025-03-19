import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  const [temaBranco, setTemaBranco] = useState(false);

  const toggleTema = () => {
    setTemaBranco(!temaBranco);
  };

  const containerEstilo = temaBranco
    ? [styles.container, styles.containerBranco]
    : styles.container;

  const textoEstilo = temaBranco
    ? [styles.texto, styles.textoBranco]
    : styles.texto;

  const botaoEstilo = temaBranco
    ? [styles.botao, styles.botaoBranco]
    : styles.botao;

  return (
    <ScrollView>
      <View style={containerEstilo}>
        <TouchableOpacity style={botaoEstilo} onPress={toggleTema}>
          <Text style={textoEstilo}>Alternar Tema</Text>
        </TouchableOpacity>

        <Text>{"\n"}</Text>
        <Text style={textoEstilo}>Bem vindo ao meu telefone!{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Image
          source={{
            uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/what-no-face-in-spirited-away-represents-explained-feature.jpg",
          }}
          style={{
            height: 500,
            width: 350,
          }}
        />

        <Text>{"\n"}</Text>
        <Image
          source={require("./Imagens/Lucy.png")}
          style={{
            height: 500,
            width: 350,
          }}
        />

        <Text>{"\n"}</Text>
        <Text style={textoEstilo}>
          Indicação básica de um projeto em Native!{"\n"}
        </Text>
        <Text>{"\n"}</Text>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
    fontSize: 18,
  },
  containerBranco: {
    backgroundColor: "#fff",
  },
  textoBranco: {
    color: "#000",
  },
  botao: {
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#007BFF",
  },
  botaoBranco: {
    backgroundColor: "#28A745",
  },
});
