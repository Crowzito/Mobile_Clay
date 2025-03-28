import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Pessoa(dados) {
  return (
    <View style={styles.container}>
      <Text>Pessoa</Text>
      <Text>Nome: {dados.nome}</Text>
      <Text>Idade: {dados.idade}</Text>
      <Image
        source={{
          uri: dados.foto,
        }}
        style={{ height: 200, width: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    borderWidth: 10,
  },
});
