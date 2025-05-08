import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { receitas } from "../../data";
import { Button, Card, Text } from "react-native-paper";

export default function HomeScreen({ navigation, route }) {
  return (
    <View>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            style={{
              margin: 15,
            }}
          >
            <Card.Content>
              <Text style={{ textAlign: "center", fontWeight: 600 }}>
                {item.nome}
              </Text>
            </Card.Content>
            <Card.Content>
              <Card.Actions>
                <Button
                  mode="contained"
                  icon="arrow-right"
                  onPress={() => navigation.navigate("ReceitaScreen", { item })}
                >
                  Receita
                </Button>
              </Card.Actions>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
