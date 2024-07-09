import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomSafeArea from "../components/CustomSafeArea";
import CustomTextInput from "../components/CustomTextInput";
import EquipmentSelector from "../components/EquipmentSelector";

const CreateTicketScreen = () => {
  const [type, setType] = useState("mouse");
  const [computerId, setComputerId] = useState("");
  const [issue, setIssue] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [reportedBy, setReportedBy] = useState("");

  const handleCreateTicket = () => {
    if (type && computerId && issue) {
      if (type !== "computer" && !serialNumber) {
        return alert("Please fill in all fields.");
      }
      const newTicket = {
        id: Date.now(),
        type,
        computerId,
        issue,
        serialNumber,
        reportedBy,
        resolved: false,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        comment: "",
        resolvedBy: "",
      };
      console.log("Ticket created: ", newTicket);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <CustomSafeArea />
      <Text style={styles.header}>Kreiraj novi tiket</Text>
      <EquipmentSelector type={type} setType={setType} />
      <CustomTextInput
        label={"Opis problema"}
        text={issue}
        setText={setIssue}
      />
      {type != "computer" && (
        <CustomTextInput
          label={`Serijski broj ${
            type === "mouse"
              ? "miša"
              : type === "headphones"
              ? "slušalica"
              : type === "keyboard"
              ? "tastature"
              : "računara"
          }`}
          text={serialNumber}
          setText={setSerialNumber}
        />
      )}

      <CustomTextInput
        label={"Broj računara"}
        text={computerId}
        setText={setComputerId}
      />

      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateTicket}
      >
        <Text style={styles.createButtonText}>Kreiraj tiket</Text>
      </TouchableOpacity>
    </View>
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
  input: {
    backgroundColor: "#202427",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "#202427",
    color: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: "#e52936",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    marginTop: 20,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
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
    backgroundColor: "#202427",
    marginBottom: 10,
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
    backgroundColor: "#202427",
    marginBottom: 10,
  },
});

export default CreateTicketScreen;
