import { StyleSheet, View } from "react-native";
import { Card, Button, Text } from "react-native-paper";

import React from "react";

export default function ItemScreen({ navigation, route }) {
  console.log("CARRO RECEBIDO =>", route.params.item);

  const carros = route.params.item;

  return (
    <View>
      <Card>
        <Card.Content>
          <Text>Nome: {carros.nome}</Text>
          <Text>Fabricante: {carros.fabricante}</Text>
          <Text>Cor: {carros.cor}</Text>
          <Text>Ano: {carros.ano}</Text>
        </Card.Content>
        <Card.Actions></Card.Actions>
        <Button
          mode="contained-tonal"
          icon={arrow - left}
          onPress={() => navigation.goBack()}
        ></Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
