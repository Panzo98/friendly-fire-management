import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveTicketsScreen from "../screens/ActiveTicketsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CreateTicketScreen from "../screens/TabScreens/CreateTicketScreen";
import PlaystationGamesScreen from "../screens/TabScreens/PlaystationGamesScreen";
import InventoryScreen from "../screens/InventoryScreen";
import PlaystationsScreen from "../screens/PlaystationsScreen";
import BirthdaysScreen from "../screens/BirthdaysScreen";
import ShiftsScreen from "../screens/ShiftsScreen";
import TicketsScreen from "../screens/TicketsScreen";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/TabScreens/HomeScreen";
import ScreenWrapper from "../components/ScreenWrapper";

const Tab = createBottomTabNavigator();
const withScreenWrapper = (Component, title) => {
  return (props) => (
    <ScreenWrapper title={title}>
      <Component {...props} />
    </ScreenWrapper>
  );
};

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

          if (route.name === "Home") {
            iconName = "home";
            IconComponent = Octicons;
            size = focused ? 30 : 24;
          } else if (route.name === "Settings") {
            iconName = "account-circle-outline";
            IconComponent = MaterialCommunityIcons;
            size = focused ? 30 : 24;
          } else if (route.name === "CreateTicket") {
            iconName = "plus-circle";
            IconComponent = MaterialCommunityIcons;
            size = focused ? 30 : 24;
          } else if (route.name === "Games") {
            iconName = "playstation";
            IconComponent = FontAwesome5;
            size = focused ? 30 : 24;
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={withScreenWrapper(HomeScreen, "Dashboard")}
      />
      <Tab.Screen
        name="Games"
        component={withScreenWrapper(PlaystationGamesScreen, "PS Igrice")}
      />
      <Tab.Screen
        name="CreateTicket"
        component={withScreenWrapper(CreateTicketScreen, "Kreiraj novi tiket")}
      />
      <Tab.Screen
        name="Inventory"
        options={{ tabBarButton: () => null }}
        component={withScreenWrapper(InventoryScreen, "Inventar")}
      />
      <Tab.Screen
        name="ActiveTickets"
        options={{ tabBarButton: () => null }}
        component={withScreenWrapper(ActiveTicketsScreen, "Tiketi")}
      />
      <Tab.Screen
        name="Birthdays"
        options={{ tabBarButton: () => null }}
        component={withScreenWrapper(BirthdaysScreen, "Rođendani")}
      />
      <Tab.Screen
        name="Shifts"
        options={{ tabBarButton: () => null }}
        component={withScreenWrapper(ShiftsScreen, "Smjene")}
      />
      <Tab.Screen
        name="Playstation"
        options={{ tabBarButton: () => null }}
        component={withScreenWrapper(PlaystationsScreen, "PS Konzole")}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
