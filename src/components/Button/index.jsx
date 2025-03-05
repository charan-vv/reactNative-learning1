import React from "react";
import { TouchableOpacity, Text, useColorScheme ,StyleSheet } from "react-native";


const ThemeButton = ({ title, onPress, style, textStyle }) => {
  const theme = useColorScheme();

  return (
    <TouchableOpacity
      style={[themeStyles.button, theme === "dark" && themeStyles.darkButton, style]}
      onPress={onPress}
    >
      <Text style={[themeStyles.buttonText, theme === "dark" && themeStyles.darkButtonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const themeStyles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: "#fff",
      padding: 10,
      
    },
    darkContainer: {
      backgroundColor: "orange",
    },
    text: {
      fontSize: 16,
      color: "#000",
    },
    darkText: {
      color: "#fff",
    },
  
    // Button Styles
    button: {
      backgroundColor: "red", // Light Mode Button Color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 10,
    },
    darkButton: {
      backgroundColor: "pink", // Dark Mode Button Color
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    darkButtonText: {
      color: "Yellow", // Light gray text for dark mode button
    },
  });
export default ThemeButton;
