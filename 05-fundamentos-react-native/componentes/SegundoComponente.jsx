import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function SegundoComponente() {
  return (
    <View style={styles.segundoComponente}>
      <Text style={styles.h2}>Pão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  segundoComponente: {
    backgroundColor: "green",
    padding: 40,
    marginTop: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  h2: {
    color: "#fff",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: 15,
  },
});
