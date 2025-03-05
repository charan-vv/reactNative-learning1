import React from "react";
import { View, Text, TextInput, useColorScheme,StyleSheet ,} from "react-native";


const ThemeTextInput = ({ 
  label, 
  error, 
  placeholder, 
  onChangeText, 
  value, 
  type = "default", 
  name, 
  id, 
  style 
}) => {
  const theme = useColorScheme();

  return (
    <View style={themeStyles.inputContainer}>
      {label && <Text style={[themeStyles.label, theme === "dark" && themeStyles.darkLabel]}>{label}</Text>}

      <TextInput
        style={[
          themeStyles.input, 
          theme === "dark" && themeStyles.darkInput, 
          style
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme === "dark" ? "#aaa" : "#666"}
        keyboardType={type}
        value={value}
        onChangeText={(text) => onChangeText(text, name)}
        id={id}
      />

      {error && <Text style={themeStyles.errorText}>{error}</Text>}
    </View>
  );
};


const themeStyles = StyleSheet.create({
    inputContainer: {
      width: "80%",
      marginBottom: 10,
      // flex:1,
      // justifyContent:"center",
      // alignItems:"center"

    },
    label: {
      fontSize: 16,
      color: "#000",
      marginBottom: 5,
    },
    darkLabel: {
      color: "#fff",
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      color: "#000",
      backgroundColor: "#fff",
    },
    darkInput: {
      borderColor: "#555",
      color: "#fff",
      backgroundColor: "#333",
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginTop: 5,
    },
  });

export default ThemeTextInput;
