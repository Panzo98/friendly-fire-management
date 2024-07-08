import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const CustomSafeArea = ({}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#131517" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default CustomSafeArea;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#121212",
  },
});
