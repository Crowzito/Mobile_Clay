import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Series(props) {
  const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{nome}</Text>
        <Image source={{ uri: capa }} style={styles.capa} />
        <Text>Ano: {ano}</Text>
        <Text>Temporadas: {temporadas}</Text>
        <Text>Diretor: {diretor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 2,
  },
  capa: {
    width: 300,
    height: 500,
    borderRadius: 6,
    marginBottom: 10,
  },
  titulo: {
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
  },
});
