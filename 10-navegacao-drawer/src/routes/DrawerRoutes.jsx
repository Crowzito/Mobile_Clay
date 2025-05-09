import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";

import { Ionicons } from "@expo/vector-icons";

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: 800, fontSize: 24 },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Perfis",
          headerTitleAlign: "center",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ConfigScreen"
        component={ConfigScreen}
        options={{
          title: "Configurações",
          headerTitleAlign: "center",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
