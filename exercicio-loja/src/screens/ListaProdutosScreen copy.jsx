import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Text, Avatar, Button, Divider } from "react-native-paper";

export default function ListaProdutosScreen({ navigation, route }) {
  console.log("PRODUTO RECEBIDO: ", route.params);

  const product = route.params;
  const [produto, setProduto] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/category/${product}`)
      .then((resposta) => {
        setProduto(resposta["data"]);
      })
      .catch((erro) => alert(`Erro ao buscar produto!!`));
  }, []);

  return (
    <FlatList
      data={produto}
      renderItem={({ item }) => (
        <Card onPress={() => navigation.navigate("ProdutoScreen", item.id)}>
          <Card.Title
            title={item["title"]}
            subtitle={item["description"]}
            left={() => <Text>{`$${item["price"]}`}</Text>}
            right={() => <IconButton icon="chevron-right" size={30} />}
          />
        </Card>
      )}
      keyExtractor={produto['id']}
    />
  );
}

const styles = StyleSheet.create({});
