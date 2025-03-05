  import React from "react";
  import { View, useColorScheme, StyleSheet } from "react-native";

  const viewBlock = ({ children, style }) => {
    const theme = useColorScheme(); // Detect light or dark mode

    return (
      <View style={[styles.view, theme === "dark" && styles.darkView, style]}>
        {children}
      </View>
    );
  };

  const styles = StyleSheet.create({
    view: {
      // backgroundColor: "#fff", // Default Light Mode Background
      padding: 10,
    },
    darkView: {
      backgroundColor: "#121212", // Dark Mode Background
    },
  });

  export default viewBlock;
