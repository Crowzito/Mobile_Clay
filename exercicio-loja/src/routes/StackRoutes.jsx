import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "../screens/HomeScreen";
import ListaProdutosScreen from "../screens/ListaProdutosScreen";
import ProdutoScreen from "../screens/ProdutoScreen";

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Categorias", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ListaProdutosScreen"
        component={ListaProdutosScreen}
        options={{ title: "Lista de Produtos", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ProdutoScreen"
        component={ProdutoScreen}
        options={{ title: "Produto", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
