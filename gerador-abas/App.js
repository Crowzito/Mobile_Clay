import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import JogoDoBichoScreen from "./screens/JogoDoBichoScreen";
import MegaSenaScreen from "./screens/MegaSenaScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={MegaSenaScreen}
          name="MegaSenaScreen"
          options={{
            title: "MegaSena",
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="fish-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          component={JogoDoBichoScreen}
          name="JogoDoBichoScreen"
          options={{
            title: "Jogo do Bicho",
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="apps-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
