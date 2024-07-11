import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CustomSafeArea from "../components/CustomSafeArea";
import { useNavigation } from "@react-navigation/native";
import SquareCard from "../components/SquareCard";

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
      <View style={styles.cardContainer}>
        <SquareCard title={"Birthdays"} description={"Najavljena"} value={2} />
        <SquareCard title={"Shifts"} description={"Sedmica"} value={"13."} />
      </View>
      <View style={styles.cardContainer}>
        <SquareCard title={"Inventory"} description={"Artikala"} value={48} />
        <SquareCard title={"Playstation"} description={"Konzole"} value={4} />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Odjavi se</Text>
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
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
