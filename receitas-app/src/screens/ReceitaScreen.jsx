import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";

export default function ReceitaScreen({ navigation, route }) {
  const receita = route.params.item;

  console.log("RECEITA RECEBIDA =>", receita);

  return (
    <ScrollView>
      <Card style={{ margin: 15 }}>
        <Card.Content>
          <Text
            style={{ fontWeight: 700, textAlign: "center", paddingBottom: 20 }}
          >
            {receita.nome}
          </Text>
        </Card.Content>
        <Card.Content>
          <Text style={styles.texto}>
            Tempo de preparo: {receita.tempoPreparo}
          </Text>
          <Text style={styles.texto}>Porções: {receita.porcoes}</Text>
          <Text style={styles.lista}>Ingredientes:</Text>
          {receita.ingredientes.map((ingrediente, index) => (
            <Text style={styles.texto} key={index}>
              {ingrediente}
            </Text>
          ))}
          <Text style={styles.lista}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((modoPreparo, index) => (
            <Text style={styles.texto} key={index}>
              {modoPreparo}
            </Text>
          ))}
        </Card.Content>
        <Card.Cover source={{ uri: receita.imagem }} style={{ margin: 15 }} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  texto: {
    margin: 5,
  },
  lista: {
    margin: 15,
    fontWeight: 600,
  },
});
