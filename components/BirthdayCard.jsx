import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const BirthdayCard = ({ birthday, index }) => {
  return (
    <View key={index} style={styles.birthdayCard}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="balloon" size={40} color="#e52936" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.birthdayName}>{birthday.name}</Text>
        <View style={styles.row}>
          <MaterialCommunityIcons name="calendar" size={16} color="#CCCCCC" />
          <Text style={styles.birthdayDate}>
            {birthday.date} {"    "}
          </Text>
          {/* </View> */}
          {/* <View style={styles.row}> */}
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color="#CCCCCC"
          />
          <Text style={styles.birthdayTime}>{birthday.time}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.birthdayAge}>{birthday.age} godina</Text>
          <Text style={styles.birthdayPackage}>{birthday.package}</Text>
        </View>
      </View>
    </View>
  );
};

export default BirthdayCard;

const styles = StyleSheet.create({
  birthdayCard: {
    flexDirection: "column",
    backgroundColor: "#202427",
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 200,
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  birthdayName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  birthdayDate: {
    color: "#CCCCCC",
    fontSize: 14,
    marginLeft: 5,
  },
  birthdayTime: {
    color: "#CCCCCC",
    fontSize: 14,
    marginLeft: 5,
  },
  birthdayAge: {
    color: "#e52936",
    fontSize: 14,
    marginRight: 5,
  },
  birthdayPackage: {
    color: "#CCCCCC",
    fontSize: 14,
    marginLeft: 5,
  },
});
