import React from "react";
import { Text, useColorScheme, StyleSheet,TouchableOpacity } from "react-native";

const TextBlock = ({ label, style,onPress }) => {
  const theme = useColorScheme(); // Get current theme ('light' or 'dark')

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>

    <Text style={[styles.text, theme === "dark" && styles.darkText, style]}>
      {label}
    </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#000", // Default (Light Mode: Black Text)
  },
  darkText: {
    color: "#fff", // Dark Mode: White Text
  },
});

export default TextBlock;
