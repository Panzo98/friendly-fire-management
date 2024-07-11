import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const equipmentData = [
  { type: "mouse", icon: "mouse", broken: Math.floor(Math.random() * 5) + 1 },
  {
    type: "headphones",
    icon: "headphones",
    broken: Math.floor(Math.random() * 5) + 1,
  },
  {
    type: "computer",
    icon: "monitor",
    broken: Math.floor(Math.random() * 5) + 1,
  },
  {
    type: "keyboard",
    icon: "keyboard",
    broken: Math.floor(Math.random() * 5) + 1,
  },
];

const FaultsPreview = ({ navigation }) => {
  return (
    <View style={styles.equipmentContainer}>
      {equipmentData.map((item) => (
        <TouchableOpacity
          key={item.type}
          style={styles.iconContainer}
          onPress={() =>
            navigation.navigate("ActiveTickets", {
              type: item.type,
            })
          }
        >
          <MaterialCommunityIcons name={item.icon} size={40} color="#505457" />
          {item.broken > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.broken}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  equipmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 12,
    backgroundColor: "red",
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default FaultsPreview;
