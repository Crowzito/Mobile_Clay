import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function JavascriptComponent() {
  const nome = "Pedro";
  const idade = 22;

  function alertaNovo() {
    alert(`Cliquei no botão`);
  }

  function checkAge() {
    if (idade >= 18) {
      return `Sim`;
    } else {
      return `Menor de idade`;
    }
  }

  return (
    <View>
      <Text>JS Component</Text>

      <Text>
        Nome:
        {nome}
      </Text>
      <Text>Idade: {idade}</Text>

      <Text>É maior de idade? {checkAge(idade)}</Text>

      <Text>Check: {idade >= 18 ? "18+" : "18-"}</Text>

      <Button title="Clique" onPress={alertaNovo} />
    </View>
  );
}

const styles = StyleSheet.create({});
