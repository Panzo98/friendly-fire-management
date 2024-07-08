import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  LayoutAnimation,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { solutionsData } from "../data/solutionsData";
import RNPickerSelect from "react-native-picker-select";

const TicketCard = ({ ticket, isActive, onToggle, onResolve }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState("");
  const [comment, setComment] = useState("");

  const solutions = solutionsData;
  console.log(solutions);

  let iconName;
  let iconColor = "#e52936";

  switch (ticket.type) {
    case "headphones":
      iconName = "headphones";
      break;
    case "mouse":
      iconName = "mouse";
      break;
    case "keyboard":
      iconName = "keyboard";
      break;
    case "computer":
      iconName = "monitor";
      break;
    default:
      iconName = "alert-circle";
      iconColor = "#75767c";
  }

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onToggle();
  };

  const handleResolve = () => {
    if (selectedSolution === "ostalo" && comment === "") {
      alert("Molimo vas unesite komentar za ostalo");
      return;
    }
    setModalVisible(false);
    onResolve(ticket.id, selectedSolution, comment);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleToggle} style={styles.cardHeader}>
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
        <Text style={styles.cardTitle}>{`${ticket.serialNumber}`}</Text>
      </TouchableOpacity>
      {isActive && (
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>{ticket.issue}</Text>
          <Text style={styles.cardText}>Računar: {ticket.computerId}</Text>
          <Text style={styles.cardText}>Prijavio: {ticket.reportedBy}</Text>
          <Text style={styles.cardText}>Vrijeme: {ticket.time}</Text>
          <Text style={styles.cardText}>Datum: {ticket.date}</Text>

          {ticket.additionalComment ? (
            <Text style={styles.cardText}>
              Dodatni komentar: {ticket.additionalComment}
            </Text>
          ) : null}

          {ticket.userWhoAttempted ? (
            <Text style={styles.cardText}>
              Pokušao rešiti: {ticket.userWhoAttempted}
            </Text>
          ) : null}

          {ticket.attemptedSolution ? (
            <Text style={styles.cardText}>
              Pokušano rešenje: {ticket.attemptedSolution}
            </Text>
          ) : null}

          {ticket.comments && ticket.comments.length > 0 ? (
            <>
              <Text style={styles.cardText}>Komentari:</Text>
              {ticket.comments.map((comment, index) => (
                <Text key={index} style={styles.cardText}>
                  - {comment.user}: {comment.comment}
                </Text>
              ))}
            </>
          ) : null}

          <TouchableOpacity
            style={styles.resolveButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.resolveButtonText}>Otkloni problem</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Rešenje problema</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedSolution(value)}
              items={solutions[ticket.type] || []}
              style={pickerSelectStyles}
            />
            {selectedSolution === "ostalo" && (
              <TextInput
                style={styles.commentInput}
                placeholder="Unesite komentar"
                placeholderTextColor="#999"
                value={comment}
                onChangeText={setComment}
              />
            )}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleResolve}
            >
              <Text style={styles.modalButtonText}>Završi tiket</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Otkaži</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#202427",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardContent: {
    padding: 15,
    paddingTop: 0,
  },
  cardText: {
    color: "#BBBBBB",
    fontSize: 14,
    marginVertical: 2,
  },
  resolveButton: {
    backgroundColor: "#e52936",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: "center",
  },
  resolveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#202427",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#e52936",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    width: "100%",
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#75767c",
  },
  commentInput: {
    backgroundColor: "#121212",
    color: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    width: "100%",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#75767c",
    borderRadius: 4,
    color: "#FFFFFF",
    paddingRight: 30,
    backgroundColor: "#121212",
    marginBottom: 20,
    width: "100%",
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#75767c",
    borderRadius: 4,
    color: "#FFFFFF",
    paddingRight: 30,
    backgroundColor: "#121212",
    marginBottom: 20,
    width: "100%",
  },
});

export default TicketCard;
