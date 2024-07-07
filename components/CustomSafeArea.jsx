import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const CustomSafeArea = ({}) => {
  return <SafeAreaView style={styles.safeArea}></SafeAreaView>;
};

export default CustomSafeArea;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#131517",
  },
});
