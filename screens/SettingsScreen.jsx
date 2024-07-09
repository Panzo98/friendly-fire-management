import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomSafeArea from "../components/CustomSafeArea";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

const BirthdaysIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="#e52936">
    <Path
      d="M12 2a5 5 0 015 5v3h3a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V12a2 2 0 012-2h3V7a5 5 0 015-5z"
      fill="#e52936"
    />
  </Svg>
);

const ShiftsIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="#e52936">
    <Path
      d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 2a9 9 0 110 18 9 9 0 010-18zm0 2v7l5 3-1 1-6-4V5h2z"
      fill="#e52936"
    />
  </Svg>
);

const InventoryIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="#e52936">
    <Path
      d="M12 2L2 7l10 5 10-5-10-5zm0 3.27L17.15 7 12 9.73 6.85 7 12 5.27zm0 4.24L2 14l10 5 10-5-10-4.49zm0 1.45L17.15 14 12 16.73 6.85 14 12 10.96zM2 17l10 5 10-5v2l-10 5-10-5v-2z"
      fill="#e52936"
    />
  </Svg>
);

const PlayStationIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="#e52936">
    <Path
      d="M1 2h22v20H1V2zm4 3h14v2H5V5zm0 4h10v2H5V9zm0 4h8v2H5v-2z"
      fill="#e52936"
    />
  </Svg>
);

const SettingsScreen = () => {
  const [employeeName, setEmployeeName] = React.useState("Aleksandar");
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <CustomSafeArea />
      <Text style={styles.header}>Zdravo {`${employeeName}`}</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Birthdays")}
      >
        <BirthdaysIcon />
        <Text style={styles.cardText}>Pocetna strana za rodjendane</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Shifts")}
      >
        <ShiftsIcon />
        <Text style={styles.cardText}>Pocetna strana za smjene</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Inventory")}
      >
        <InventoryIcon />
        <Text style={styles.cardText}>Pocetna strana za popis robe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("PlayStation")}
      >
        <PlayStationIcon />
        <Text style={styles.cardText}>Pocetna strana za PlayStatione</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#202427",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: "#e52936",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
