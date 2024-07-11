import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FaultsPreview from "./Previews/FaultsPreview";
import BirthdaysPreview from "./Previews/BirthdaysPreview";

const DashboardPreview = ({ category, navigation }) => {
  const renderPreview = () => {
    switch (category) {
      case "Kvarovi":
        return <FaultsPreview navigation={navigation} />;
      case "Rođendani":
        return <BirthdaysPreview />;
      default:
        return <Text style={styles.noDataText}>Nema podataka za prikaz</Text>;
    }
  };

  const handleNavigate = () => {
    if (category === "Kvarovi") {
      navigation.navigate("ActiveTickets");
    } else if (category === "Rođendani") {
      navigation.navigate("Birthdays");
    }
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionHeader}>{category}</Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={styles.sectionBtn}>Vidi sve</Text>
        </TouchableOpacity>
      </View>
      {renderPreview()}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e52936",
  },
  sectionBtn: {
    fontWeight: "300",
    color: "white",
  },
  noDataText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default DashboardPreview;
