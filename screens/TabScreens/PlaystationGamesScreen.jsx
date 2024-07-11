import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { gamesData } from "../../data/gamesData";
import GameCard from "../../components/GameCard";
import CreateEditGameModal from "../../components/CreateEditGameModal";

const PlaystationGamesScreen = () => {
  const [games, setGames] = useState(gamesData);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPS5, setSelectedPS5] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [sortBy, setSortBy] = useState("games");

  const handleEditGame = (game) => {
    setSelectedGame(game);
    setSelectedPS5(Array.isArray(game.ps5) ? game.ps5 : []);
    setModalVisible(true);
    setIsEditing(true);
  };
  const handleDeleteGame = (gameId) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== gameId));
  };

  const handleAddGame = () => {
    setSelectedGame(null);
    setSelectedPS5([]);
    setModalVisible(true);
    setIsEditing(false);
  };

  const handleSaveChanges = (newGame) => {
    if (isEditing) {
      setGames((prevGames) =>
        prevGames.map((game) =>
          game.id === selectedGame.id ? { ...newGame } : game
        )
      );
    } else {
      setGames((prevGames) => [
        ...prevGames,
        { ...newGame, id: prevGames.length + 1 },
      ]);
    }
    setModalVisible(false);
  };

  const sortGames = () => {
    if (sortBy === "games") {
      return games;
    } else if (sortBy === "ps5") {
      return [...games].sort(
        (a, b) => (a.ps5?.length || 0) - (b.ps5?.length || 0)
      );
    }
  };

  return (
    <>
      <View style={styles.sortButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "games" && styles.activeSortButton,
          ]}
          onPress={() => setSortBy("games")}
        >
          <Text style={styles.sortButtonText}>Po igrama</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddGame}>
          <Text style={styles.addButtonText}>+ Dodaj igru</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortGames()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GameCard item={item} handleEditGame={handleEditGame} />
        )}
        contentContainerStyle={{ paddingBottom: 90 }}
      />
      <CreateEditGameModal
        isVisible={isModalVisible}
        game={selectedGame}
        selectedPS5={selectedPS5}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveChanges}
        onDelete={handleDeleteGame}
      />
    </>
  );
};

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
  sortButtonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  sortButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#202427",
    marginRight: 10,
  },
  activeSortButton: {
    backgroundColor: "#e52936",
  },
  sortButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
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
  modalContainer: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e52936",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#202427",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  ps5Option: {
    backgroundColor: "#202427",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPs5Option: {
    backgroundColor: "#e52936",
  },
  ps5Text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#e52936",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#75767c",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#e52936",
    fontSize: 16,
  },
});

export default PlaystationGamesScreen;
