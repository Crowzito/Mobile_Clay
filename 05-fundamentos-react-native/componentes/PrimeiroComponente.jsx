import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function PrimeiroComponente(props) {
  return (
    <View style={styles.containerComponente}>
      <Text style={styles.h1}>Olá!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerComponente: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  h1: {
    fontSize: 40,
    fontWeight: 800,
  },
});
