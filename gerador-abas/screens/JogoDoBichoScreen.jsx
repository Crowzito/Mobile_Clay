import { View } from "react-native";
import React, { useState } from "react";
import { animais } from "../animais";
import { Button, Card, Text } from "react-native-paper";

export default function JogoDoBichoScreen() {
  const [animalJogo, setAnimalJogo] = useState({});

  function novoAnimal() {
    const numeroDoAnimal = Math.floor(Math.random() * 10) + 1;
    const animal = animais.find((a) => a.numero === numeroDoAnimal);
    if (animal) {
      setAnimalJogo(animal);
    }
  }

  return (
    <View>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Text variant="displayMedium">
            {animalJogo.nome || "Nenhum animal selecionado"}
          </Text>
          {animalJogo.imagem && (
            <Card.Cover source={{ uri: animalJogo.imagem }} />
          )}
        </Card.Content>
        <Card.Actions>
          <Button onPress={novoAnimal}>Mostrar Animal</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
