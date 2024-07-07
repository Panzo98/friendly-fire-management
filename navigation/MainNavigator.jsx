import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveTicketsScreen from "../screens/ActiveTicketsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgba(32, 36, 39, 0.94)",
          borderTopColor: "rgba(30, 30, 30, 0.5)",
        },
        tabBarActiveTintColor: "#e52936",
        tabBarInactiveTintColor: "#75767c",
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === "Aktivni Tiketi") {
            iconName = "home";
            IconComponent = Octicons;
            size = focused ? 30 : 24;
          } else if (route.name === "Podesavanja") {
            iconName = "account-circle-outline";
            IconComponent = MaterialCommunityIcons;
            size = focused ? 30 : 24;
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Aktivni Tiketi" component={ActiveTicketsScreen} />
      <Tab.Screen name="Podesavanja" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
