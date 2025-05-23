import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Text, Avatar, Button, Divider } from "react-native-paper";

export default function ProdutoScreen({ navigation, route }) {
  console.log("ID DO PRODUTO RECEBIDO: ", route.params);

  const idProduto = route.params;
  const [produto, setProduto] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${idProduto}`)
      .then((resposta) => {
        setProduto(resposta["data"]);
      })
      .catch((erro) => alert(`Erro ao buscar produto!!`));
  }, []);

  return (
    <View>
      <Card>
        <Card.Title
          title={`${produto["title"]}`}
          subtitle={produto["description"]}
          left={() => <Text>{`$${item["price"]}`}</Text>}
          right={(props) => (
            <Avatar.Image {...props} source={{ uri: produto["images"] }} />
          )}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
