import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveTicketsScreen from "../screens/ActiveTicketsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CreateTicketScreen from "../screens/CreateTicketScreen"; // Add this import for the new screen
import PlaystationGamesScreen from "../screens/PlaystationGamesScreen"; // Add this import for PlayStation games screen
// import InventoryScreen from "../screens/InventoryScreen"; // Add this import for Inventory screen
// import HistoryScreen from "../screens/HistoryScreen"; // Add this import for History screen
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons"; // Add FontAwesome5 for PlayStation icon
import { AntDesign } from "@expo/vector-icons"; // Add AntDesign for history icon

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
          } else if (route.name === "Kreiraj Tiket") {
            iconName = "plus-circle";
            IconComponent = MaterialCommunityIcons;
            size = focused ? 30 : 24;
          } else if (route.name === "PlayStation Igre") {
            iconName = "playstation";
            IconComponent = FontAwesome5;
            size = focused ? 30 : 24;
          } else if (route.name === "Inventar") {
            iconName = "box";
            IconComponent = FontAwesome5;
            size = focused ? 30 : 24;
          } else if (route.name === "Istorija") {
            iconName = "clockcircleo";
            IconComponent = AntDesign;
            size = focused ? 30 : 24;
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Aktivni Tiketi" component={ActiveTicketsScreen} />
      <Tab.Screen name="PlayStation Igre" component={PlaystationGamesScreen} />
      <Tab.Screen name="Kreiraj Tiket" component={CreateTicketScreen} />
      {/* <Tab.Screen name="Inventar" component={SettingsScreen} /> */}
      {/* <Tab.Screen name="Istorija" component={SettingsScreen} /> */}
      <Tab.Screen name="Podesavanja" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
