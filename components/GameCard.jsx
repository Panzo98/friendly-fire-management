import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const GameCard = ({ item, handleEditGame }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.gameImage} />
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameInfo}>Igrača: {item.players}</Text>
      <Text style={styles.gameInfo}>Veličina: {item.size}</Text>
      <Text style={styles.gameInfo}>
        PS5: {Array.isArray(item.ps5) ? item.ps5.join(", ") : "N/A"}
      </Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEditGame(item)}
      >
        <Text style={styles.editButtonText}>Uredi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#202427",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  gameImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  gameInfo: {
    color: "#BBBBBB",
    marginTop: 5,
  },
  editButton: {
    backgroundColor: "#e52936",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
