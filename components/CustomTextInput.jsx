import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const CustomTextInput = ({ label, text, setText, style }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={(text) => setText(text)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      outlineColor="#202427"
      activeOutlineColor="#e52936"
      multiline
      textColor="white"
      mode="outlined"
      theme={{
        colors: {
          onSurfaceVariant: text ? "#e52936" : "#a9a9a9a9",
          color: "white",
        },
        fonts: {
          labelMedium: {
            fontWeight: "bold",
          },
          label: {
            fontWeight: "bold",
          },
        },
      }}
      style={[styles.input, style ? style : null]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#202427",
    color: "white",
    width: "100%",
    marginBottom: 10,
    fontSize: 16,
    overflow: "hidden",
  },
});

export default CustomTextInput;
