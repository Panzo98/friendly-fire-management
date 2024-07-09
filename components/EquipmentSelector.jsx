import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const EquipmentSelector = ({ type, setType }) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 10,
        flexDirection: "row",
        borderRadius: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => setType("mouse")}
        style={[
          styles.iconContainer,
          type === "mouse" && styles.selectedIconContainer,
        ]}
      >
        <MaterialCommunityIcons
          name="mouse"
          size={24}
          color={type === "mouse" ? "white" : "#e52936"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setType("headphones")}
        style={[
          styles.iconContainer,
          type === "headphones" && styles.selectedIconContainer,
        ]}
      >
        <MaterialCommunityIcons
          name="headphones"
          size={24}
          color={type === "headphones" ? "white" : "#e52936"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setType("computer")}
        style={[
          styles.iconContainer,
          type === "computer" && styles.selectedIconContainer,
        ]}
      >
        <MaterialCommunityIcons
          name="monitor"
          size={24}
          color={type === "computer" ? "white" : "#e52936"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setType("keyboard")}
        style={[
          styles.iconContainer,
          type === "keyboard" && styles.selectedIconContainer,
        ]}
      >
        <MaterialCommunityIcons
          name="keyboard"
          size={24}
          color={type === "keyboard" ? "white" : "#e52936"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EquipmentSelector;

const styles = StyleSheet.create({
  iconContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#121212",
    borderRadius: 10,
  },
  selectedIconContainer: {
    backgroundColor: "#e52936",
  },
});
