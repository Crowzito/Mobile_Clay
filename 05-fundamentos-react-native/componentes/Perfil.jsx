import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Perfil(props) {
  console.log(props);

  return (
    <View style={styles.containerPerfil}>
      <Text style={styles.perfilFonte}>Macaco Azul</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade}</Text>
      <Text>E-mail: {props.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPerfil: {
    backgroundColor: "rgba(255, 223, 155, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  perfilFonte: {
    fontWeight: 500,
  },
});
