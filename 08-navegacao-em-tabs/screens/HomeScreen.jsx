import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Paragraph, Text, Title } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={{ alignItems: "center", margin: 20}}>
      <Text variant="headlineLarge" style={{ textAlign: "center", marginBottom: 15, fontWeight: 800 }}>
        Tela Inicial
      </Text>

      <Card style={{ width: "90%", padding: 15 }}>
        <Card.Content style={{margin: 10, alignItems: "center"}}>
          <Title style={{ fontSize: 24, fontWeight: 600}}>Título</Title>
          <Paragraph style={{ fontSize: 18}}>
            DAWHAWGWYDAWHAWGWYDAWHAWGWYDAWHAWGWYDAWHAWGWYDAWHAWGWYDAWHAWGWY
          </Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://picsum.photos/700",
          }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
