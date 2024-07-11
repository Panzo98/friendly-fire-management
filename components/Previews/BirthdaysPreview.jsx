import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BirthdayCard from "../BirthdayCard";

const birthdayData = [
  {
    name: "Marko",
    date: "15.7",
    time: "14:00",
    package: "2h",
    age: 7,
  },
  {
    name: "Ana",
    date: "20.7",
    time: "16:00",
    package: "3h",
    age: 10,
  },
];

const BirthdaysPreview = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {birthdayData.length > 0 ? (
          birthdayData.map((birthday, index) => (
            <BirthdayCard key={index} birthday={birthday} />
          ))
        ) : (
          <Text style={styles.noBirthdaysText}>Nema najavljenih rođendana</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  noBirthdaysText: {
    color: "#FFFFFF",
  },
});

export default BirthdaysPreview;
