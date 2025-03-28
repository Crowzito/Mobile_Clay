import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function JavascriptComponent() {
  const nome = "Pedro Pettigrew";
  const idade = 22;

  function checkAge() {
    if (idade >= 18) {
      return "maior de idade!";
    } else {
      return "menor de idade!";
    }
  }

  function alerta() {
    alert("Clicou no Botão!!")
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>JavascriptComponent</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>
        O {nome} tem {idade} anos, então ele é {checkAge(idade)}
      </Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Button 
      title="Clique"
      onPress={alerta}
      />
      <Text>{"\n"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    margin: 15,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  h2: {
    fontWeight: 800,
    fontSize: 20,
    color: "#fff",
  },
  texto: {
    color: "#fff",
    textAlign: "center",
  },
});
