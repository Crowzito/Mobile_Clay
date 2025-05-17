import { View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Text } from "react-native-paper";
import JogoNovo from "../components/JogoNovo";

export default function MegaSenaScreen() {
  const { jogoGerado, gerarJogo } = JogoNovo();
  const [lista, setLista] = useState([]);

  function gerar() {
    gerarJogo();
    if (jogoGerado.length > 0) {
      setLista([...lista, jogoGerado]);
    }
  }

  return (
    <View>
      <Card style={{ margin: 15 }}>
        <Card.Content>
          <Text variant="displayMedium" style={{ textAlign: "center" }}>
            Seu Jogo
          </Text>
        </Card.Content>
        <Card.Content>
          <Text style={{ textAlign: "center" }} variant="displaySmall">
            {jogoGerado.length > 0
              ? jogoGerado.join(", ")
              : "Nenhum jogo gerado"}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerar}>Gerar Jogo</Button>
        </Card.Actions>
      </Card>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Text variant="displaySmall">Histórico</Text>
          {lista.map((jogo, index) => (
            <Text key={index} variant="displaySmall">
              Jogo {index + 1}: {jogo.join(", ")}
            </Text>
          ))}
        </Card.Content>
      </Card>
    </View>
  );
}
