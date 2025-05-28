import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function AlunosForm() {
  const [textoNome, setTextoNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  function salvar() {
    let aluno = {
      nome,
      cpf,
      email,
      dataNascimento,
      telefone,
    };

    alert(JSON.stringify(aluno));
    
  }

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Informe os dados do aluno:</Text>

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Nome:"
        placeholder="Informe o nome"
        value={textoNome}
        onChangeText={setTextoNome}
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="CPF:"
        placeholder="Informe o CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="E-mail:"
        placeholder="Informe o E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Telefone:"
        placeholder="Informe a Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Data de Nascimento:"
        placeholder="Informe a Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType="numeric"
      />

      <Button style={styles.input} mode="contained" onPress={salvar}>
        Salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "90%",
    marginTop: 10,
  },
});
