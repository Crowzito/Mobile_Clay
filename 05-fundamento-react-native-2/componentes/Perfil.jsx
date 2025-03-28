import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Perfil(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>PERFIL</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>Nome: {props.nome}</Text>
      <Text style={styles.texto}>Idade: {props.idade}</Text>
      <Text style={styles.texto}>E-mail: {props.email}</Text>
      <Text style={styles.texto}>Telefone: {props.telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00ffff",
    padding: 25,
    margin: 15,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#005477'
  },
  h1: {
    fontWeight: 600,
    fontSize: 24,
  },
  texto: {
    fontSize: 16,
  } 
});
