import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ActivitiesScreen from "./src/screens/ActivitiesScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CreationProfilScreen from "./src/screens/CreationProfilScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./src/screens/SettingsScreen";
import Connexion from "./src/screens/ConnexionScreen";
import ProfilScreen from "./src/screens/ProfilScreen";
import ActivityScreen from "./src/screens/ActivityScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          component={ActivitiesScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Creation"
          component={CreationProfilScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Connexion"
          component={Connexion}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Profil"
          component={ProfilScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
