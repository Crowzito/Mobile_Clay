import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function ConfigScreen(props) {
  const { navigation, route } = props;

  return (
    <View>
      <Text>ConfigScreen</Text>
      <Button mode="contained-total" onPress={() => navigation.goBack()}>
        Voltar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
