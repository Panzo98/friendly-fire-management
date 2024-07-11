import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import CustomSafeArea from "./CustomSafeArea";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomTextInput from "./CustomTextInput";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const CreateEditGameModal = ({
  isVisible,
  game,
  selectedPS5,
  onClose,
  onSave,
  onDelete,
}) => {
  const [gameTitle, setGameTitle] = useState("");
  const [gamePlayers, setGamePlayers] = useState("");
  const [gameSize, setGameSize] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [selectedPS5State, setSelectedPS5State] = useState([]);
  const [isDeleteConfirmVisible, setDeleteConfirmVisible] = useState(false);

  useEffect(() => {
    if (game) {
      setGameTitle(game.title);
      setGamePlayers(game.players);
      setGameSize(game.size);
      setGameImage(game.image);
      setSelectedPS5State(Array.isArray(game.ps5) ? game.ps5 : []);
    } else {
      setGameTitle("");
      setGamePlayers("");
      setGameSize("");
      setGameImage("");
      setSelectedPS5State([]);
    }
  }, [game]);

  const togglePS5Selection = (ps5Id) => {
    setSelectedPS5State((prevSelected) =>
      prevSelected.includes(ps5Id)
        ? prevSelected.filter((id) => id !== ps5Id)
        : [...prevSelected, ps5Id]
    );
  };

  const handleSave = () => {
    const newGame = {
      title: gameTitle,
      players: gamePlayers,
      size: gameSize,
      image: gameImage,
      ps5: selectedPS5State,
      id: game ? game.id : Date.now(),
    };
    onSave(newGame);
  };

  const handleDelete = () => {
    onDelete(game.id);
    setDeleteConfirmVisible(false);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <CustomSafeArea />
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.modalTitle}>
            {game ? `Izmijeni igru: ${game.title}` : "Dodaj novu igru"}
          </Text>
          {game && (
            <TouchableOpacity
              style={styles.deleteIconButton}
              onPress={() => setDeleteConfirmVisible(true)}
            >
              <Icon name="delete" size={28} color="#e52936" />
            </TouchableOpacity>
          )}
        </View>
        <CustomTextInput
          label="Naziv"
          text={gameTitle}
          setText={setGameTitle}
        />
        <CustomTextInput
          label="Igrača"
          text={gamePlayers}
          setText={setGamePlayers}
        />
        <CustomTextInput
          label="Veličina"
          text={gameSize}
          setText={setGameSize}
        />
        <CustomTextInput
          label="URL Slike"
          text={gameImage}
          setText={setGameImage}
        />

        <Text style={styles.modalSubtitle}>Izaberi PS5</Text>
        <View style={styles.pscontainer}>
          {[1, 2, 3, 4].map((ps5Id) => (
            <TouchableOpacity
              key={ps5Id}
              style={styles.ps5Option}
              onPress={() => togglePS5Selection(ps5Id)}
            >
              <LinearGradient
                colors={
                  selectedPS5State.includes(ps5Id)
                    ? ["#57222A", "#4A242A", "#242427"]
                    : ["#202427", "#303437", "#404447"]
                }
                start={[0, 0]}
                end={[1, 1]}
                style={styles.gradient}
              >
                <Text
                  style={[
                    styles.ps5Text,
                    {
                      color: selectedPS5State.includes(ps5Id)
                        ? "#FFFFFF"
                        : "#121212",
                    },
                  ]}
                >
                  PS {ps5Id}
                </Text>
                <Icon1
                  name="sony-playstation"
                  size={50}
                  color={
                    selectedPS5State.includes(ps5Id) ? "#FFFFFF" : "#121212"
                  }
                  style={styles.ps5Icon}
                />
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Sačuvaj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Odustani</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={isDeleteConfirmVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.confirmModalContainer}>
          <View style={styles.confirmModal}>
            <Text style={styles.confirmText}>
              Da li ste sigurni da želite obrisati igru?
            </Text>
            <View style={styles.confirmButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleDelete}
              >
                <Text style={styles.confirmButtonText}>Da</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setDeleteConfirmVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Ne</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  deleteIconButton: {
    padding: 10,
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
  pscontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  ps5Option: {
    width: "48%",
    borderRadius: 15,
    marginBottom: 10,
  },
  gradient: {
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  ps5Text: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  ps5Icon: {
    alignSelf: "center",
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
  confirmModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  confirmModal: {
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmText: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 20,
  },
  confirmButtons: {
    flexDirection: "row",
  },
  confirmButton: {
    backgroundColor: "#e52936",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateEditGameModal;
