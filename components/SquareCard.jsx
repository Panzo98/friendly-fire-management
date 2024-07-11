import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BirthdaysIcon from "../assets/icons/birthdays.png";
import ShiftsIcon from "../assets/icons/shifts.png";
import InventoryIcon from "../assets/icons/inventory.png";
import PlayStationIcon from "../assets/icons/playstations.png";

const SquareCard = ({ title, description, value }) => {
  const navigation = useNavigation();

  let renamed;
  let iconSource;

  switch (title) {
    case "Birthdays":
      renamed = "Rođendani";
      iconSource = BirthdaysIcon;
      break;
    case "Shifts":
      renamed = "Smjene";
      iconSource = ShiftsIcon;
      break;
    case "Inventory":
      renamed = "Inventar";
      iconSource = InventoryIcon;
      break;
    case "Playstation":
      renamed = "PlayStations";
      iconSource = PlayStationIcon;
      break;
    default:
      renamed = title;
      iconSource = null;
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(`${title}`)}
    >
      <LinearGradient
        colors={["#57222A", "#4A242A", "#242427"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient}
      >
        {iconSource && <Image source={iconSource} style={styles.icon} />}
        <Text style={styles.cardText}>{renamed}</Text>
        <Text
          style={{
            fontWeight: "200",
            color: "white",
            marginTop: 10,
          }}
        >
          {value} {description}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SquareCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 180,
    borderRadius: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: 20,
    borderRadius: 15,
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
