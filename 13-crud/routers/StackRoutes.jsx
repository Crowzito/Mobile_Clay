import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import AlunosForm from "../screens/AlunosForm";
import AlunosLista from "../screens/AlunosLista";

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AlunosLista"
        component={AlunosLista}
        options={{ title: "Lista de Alunos", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="AlunosForm"
        component={AlunosForm}
        options={{ title: "Formulário do Aluno", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
