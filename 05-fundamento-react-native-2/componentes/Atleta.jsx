import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Atleta(props) {
  const { nome, idade, imagem } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Atleta</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>Nome: {nome}</Text>
      <Text>{"\n"}</Text>
      <Text>Idade: {idade}</Text>
      <Text>{"\n"}</Text>
      <Image
        source={{
          uri: imagem,
        }}
        style={{
          height: 400,
          width: 300,
          margin: 5,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 3,
    borderColor: "#000",
    borderWidth: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  h1: {
    fontWeight: 800,
    fontSize: 24,
    marginTop: 35
  },
});
