import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Text,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";

import axios from "axios";

export default function HomeScreen({ navigation, route }) {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list?delay=3000")
      .then((resposta) => {
        console.log(resposta.data);
        setCategoria(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <FlatList
      style={{ marginBottom: 50 }}
      data={categoria}
      renderItem={({ item }) => (
        <Card
          style={{ margin: 5 }}
          onPress={() => navigation.navigate("ListaProdutosScreen", item)}
        >
          <Card.Title
            title={`${item}`}
            right={() => <IconButton icon="chevron-right" size={30} />}
          />
        </Card>
      )}
      ListEmptyComponent={() => (
        <View style={{alignItems: "center", flex: 1}}>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.black}
            size={100}
          />
          <Text variant="titleLarge" style={{ textAlign: "center", alignItems: "center" }}>
            Carregando...
          </Text>
        </View>
      )}
    />
  );
}
