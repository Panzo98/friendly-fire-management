import { StyleSheet, Text, View } from "react-native";
import CustomSafeArea from "./CustomSafeArea";
import React from "react";

const ScreenWrapper = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <CustomSafeArea />
      <Text style={styles.header}>{title}</Text>
      {children}
    </View>
  );
};

export default ScreenWrapper;

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
