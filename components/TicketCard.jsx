import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TicketCard = ({ type, computerId, issue, serialNumber, reportedBy }) => {
  let iconName;
  let iconColor;

  switch (type) {
    case "headphones":
      iconName = "headphones";
      iconColor = "#e52936";
      break;
    case "mouse":
      iconName = "mouse";
      iconColor = "#e52936";
      break;
    case "keyboard":
      iconName = "keyboard";
      iconColor = "#e52936";
      break;
    case "computer":
      iconName = "monitor";
      iconColor = "#e52936";
      break;
    default:
      iconName = "alert-circle";
      iconColor = "#75767c";
  }

  return (
    <View style={styles.card}>
      <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{serialNumber}</Text>
        <Text style={styles.cardText}>{issue}</Text>
        <Text style={styles.cardText}>Računar: {computerId}</Text>
        <Text style={styles.cardText}>Prijavio: {reportedBy}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#202427",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardContent: {
    marginLeft: 10,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    color: "#BBBBBB",
    fontSize: 14,
  },
});

export default TicketCard;
