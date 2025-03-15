import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";

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
    <View style={containerEstilo}>
      <Image
        source={{
          uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/what-no-face-in-spirited-away-represents-explained-feature.jpg",
        }}
        style={{
          height: 400,
          width: 400,
        }}
      />

      <Text>{"\n"}</Text>
      <Text style={textoEstilo}>
        Indicação básica de um projeto em Native!{"\n"}
      </Text>
      <Text style={textoEstilo}>
        Indicação básica de um projeto em Native!{"\n"}
      </Text>
      <Text style={textoEstilo}>
        Indicação básica de um projeto em Native!{"\n"}
      </Text>
      <Text style={textoEstilo}>
        Indicação básica de um projeto em Native!{"\n"}
      </Text>
      <Text style={textoEstilo}>
        Indicação básica de um projeto em Native!{"\n"}
      </Text>
      <Text style={textoEstilo}>
        Indicação básica de um projeto em Native!{"\n"}
      </Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Button
        title="Aperte"
        color={"#e453f0"}
        style={styles.botao}
        onPress={toggleTema}
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
  },
  containerBranco: {
    backgroundColor: "#fff",
  },
  textoBranco: {
    color: "#000",
  },
  botao: {
    borderRadius: 5,
  },
});
