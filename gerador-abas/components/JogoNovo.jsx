import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function JogoNovo() {
  const [jogoGerado, setJogoGerado] = useState([]);

  const gerarJogo = () => {
    let numeros = new Set();
    while (numeros.size < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      numeros.add(numero < 10 ? `0${numero}` : `${numero}`);
    }
    setJogoGerado([...numeros].sort());
  };

  return { jogoGerado, gerarJogo };
}

const styles = StyleSheet.create({});
