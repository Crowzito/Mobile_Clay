import ConfigScreen from "../screens/ConfigScreen";
import HomeScreen from "../screens/HomeScreen";
import ListaScreen from "../screens/ListaScreen";
import ItemScreen from "../screens/ItemScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaScreen"
        component={ListaScreen}
        options={{
          title: "Lista",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{
          title: "Itens",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        options={{
          title: "Profile",
          headerTitleAlign: "center",
        }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="ConfigScreen"
        options={{
          title: "Configurações",
          headerTitleAlign: "center",
        }}
        component={ConfigScreen}
      />
    </Stack.Navigator>
  );
}
