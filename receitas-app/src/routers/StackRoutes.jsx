import HomeScreen from "../screens/HomeScreen";
import ReceitaScreen from "../screens/ReceitaScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: 800 },
        }}
      />
      <Stack.Screen
        name="ReceitaScreen"
        component={ReceitaScreen}
        options={{
          title: "Receitas",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: 800 },
        }}
      />
    </Stack.Navigator>
  );
}
