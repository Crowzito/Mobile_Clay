import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Card, Button } from "react-native-paper";

export default function ListaScreen({ navigation, route }) {
  const carros = [
    { nome: "Gol", ano: "2012", cor: "azul", fabricante: "VolksWagem" },
    { nome: "Palio", ano: "2019", cor: "verde", fabricante: "Chevrolet" },
    { nome: "Kwid", ano: "2017", cor: "vermelho", fabricante: "Renault" },
  ];

  return (
    <View>
      <FlatList
        data={carros}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Text>Carro: {item.nome}</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="contained"
                icon="arrow-right"
                onPress={() => navigation.navigate("ItemScreen", { item })}
              >
                Ver Detalhes
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
