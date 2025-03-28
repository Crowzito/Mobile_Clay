import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PrimeiroComponente() {
  return (
    <View style={styles.containerComponente}>
      <Text>PrimeiroComponente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerComponente: {
    margin: 15,
  },
});
