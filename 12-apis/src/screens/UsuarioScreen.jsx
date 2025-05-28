import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Text, Avatar, Button, Divider } from "react-native-paper";

export default function UsuarioScreen({ navigation, route }) {
  console.log("ID DO USUARIO RECEBIDO: ", route.params);

  const idUsuario = route.params;
  const [usuario, setUsuario] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${idUsuario}`)
      .then((resposta) => {
        setUsuario(resposta["data"]);
      })
      .catch((erro) => alert(`Erro ao buscar usuário!!`));

    axios
      .get(`https://dummyjson.com/users/${idUsuario}/posts`)
      .then((resposta) => {
        setPosts(resposta["data"][`posts`]);
      })
      .catch((erro) => alert(`Erro ao buscar os posts do usuário!!`));
  }, []);

  return (
    <View>
      <Card>
        <Card.Title
          title={`${usuario["firstName"]} ${usuario["lastName"]}`}
          subtitle={usuario["email"]}
          left={(props) => (
            <Avatar.Image {...props} source={{ uri: usuario["image"] }} />
          )}
        />
        <Card.Content>
          <Divider />
          <Text variant="titleLarge">Imagem do Usuário</Text>
          <Card.Cover source={{ uri: usuario["image"] }} />
          <Text> </Text>
          <Divider />
          <Text variant="titleLarge">Dados do Usuário</Text>
          <Text>Apelido: {usuario["username"]}</Text>
          <Text>Idade: {usuario["age"]}</Text>
          <Text>Gênero: {usuario["gender"]}</Text>
          <Text>Telefone: {usuario["phone"]}</Text>
          <Text>Data de Nascimento: {usuario["birthDate"]}</Text>
          <Text>Universidade: {usuario["university"]}</Text>
          <Text> </Text>
          <Divider />
          <Text variant="titleLarge">Posts do Usuário</Text>
          {posts.map((post) => (
            <View>
              <Text variant="titleMedium">{post["title"]}</Text>
              <Text>{post["body"]}</Text>
              <Divider />
              
            </View>
          ))}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
