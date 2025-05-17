import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Text } from "react-native-paper";

export default function GeradorNumeroAleatorio() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  const [lista, setLista] = useState([]);

  function gerar() {
    const numero = Math.floor(Math.random() * 101);
    setNumeroAleatorio(numero);
    setLista([...lista, numero]);
  }

  function reset() {
    setNumeroAleatorio(0), setLista([]);
  }

  return (
    <View>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Text variant="displaySmall">Gerador de Numeros</Text>
          <Text variant="displaySmall">{numeroAleatorio}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="outlined" onPress={reset}>
            Resetar
          </Button>
          <Button onPress={gerar}>Gerar</Button>
        </Card.Actions>
      </Card>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Text variant="displaySmall">Histórico</Text>
          {lista.map((numero) => (
            <Text variant="displaySmall">{numero}</Text>
          ))}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
