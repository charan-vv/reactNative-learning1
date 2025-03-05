import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const PhoneInputComponent = ({ onPhoneChange }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(""); // Default country code
  const phoneInputRef = useRef(null);

  return (
    <View style={styles.inputContainer}>
      <PhoneInput
        ref={phoneInputRef}
        defaultValue={phoneNumber}
        defaultCode="IN" // Change as needed
        layout="first"
        onChangeCountry={(country) => {
          const newCountryCode = `+${country.callingCode[0]}`;
          setCountryCode(newCountryCode);
          onPhoneChange(newCountryCode, phoneNumber);
        }}
        onChangeText={(text) => {
          setPhoneNumber(text);
          onPhoneChange(countryCode, text);
        }}
        withShadow
        containerStyle={styles.input} // Apply custom styles
        textContainerStyle={styles.input}
      />
    </View>
  );
};

// ✅ StyleSheet properly defined
const styles = StyleSheet.create({
  inputContainer: {
    width: '50%',
    marginBottom: 10,
  },
  input: {
    height: 50,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  iconContainer: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default PhoneInputComponent;
