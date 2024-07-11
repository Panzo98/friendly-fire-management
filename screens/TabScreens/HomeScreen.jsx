import { StyleSheet, Text, View } from "react-native";
import CustomSafeArea from "../../components/CustomSafeArea";
import React from "react";
import DashboardPreview from "../../components/DashboardPreview";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <DashboardPreview category="Kvarovi" navigation={navigation} />
      <DashboardPreview category="Rođendani" navigation={navigation} />
      {/* <DashboardPreview category="Inventar" /> */}
      {/* <DashboardPreview category="Smjene" /> */}
      {/* <DashboardPreview category="Konzole" /> */}
    </View>
  );
};

export default HomeScreen;

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
});
