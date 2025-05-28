import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

export default function AlunosLista({ navigation, route }) {
  const [aluno, setAluno] = useState([
    {
      id: "1",
      nome: "Arthur",
      email: "aa@gmail.com",
      dataNascimento: "10/10/2010",
      cpf: "000-000-000-00",
      telefone: "(61) 9 9000-0000",
    },
    {
      id: "2",
      nome: "Lucas",
      email: "aaa@gmail.com",
      cpf: "100-000-000-00",
      dataNascimento: "10/10/2011",
      telefone: "(61) 9 9900-0000",
    },
  ]);

  return (
    <View>
      <Button
        style={styles.margem}
        icon="plus"
        mode="contained"
        onPress={() => navigation.navigate("AlunosForm")}
      >
        Cadastrar
      </Button>

      <FlatList
        data={alunos}
        renderItem={({ item }) => (
          <Card>
            <Card.Content>
              <Text>ID {item.id}</Text>
              <Text>Nome {item.nome}</Text>
              <Text>CPF {item.cpf}</Text>
              <Text>E-mail {item.email}</Text>
            </Card.Content>
            <Card.Actions>
              <Button>Editar</Button>
              <Button>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  margem: {
    margin: 10,
  },
});
