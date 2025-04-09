import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingScreen from "./screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Início",
              headerStyle: {
                backgroundColor: "purple",
              },
              tabBarInactiveTintColor: "grey",
              tabBarActiveTintColor: "purple",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              title: "Perfil",
              headerStyle: {
                backgroundColor: "blue",
              },
              tabBarInactiveTintColor: "grey",
              tabBarActiveTintColor: "blue",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{
              title: "Configurações",
              headerStyle: {
                backgroundColor: "red",
              },
              tabBarInactiveTintColor: "grey",
              tabBarActiveTintColor: "red",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cog" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
