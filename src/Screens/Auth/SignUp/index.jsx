import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ViewBlock, TextBlock, TextInput, PasswordText, PhoneInputComponent } from '../../../components';

const signUp = ({ navigation }) => {
  const [details, setDetails] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    country_code: "",
    password: "",
  });

  const [error, setError] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle phone number and country code separately
  const handlePhoneChange = (code, number) => {
    setDetails(prev => ({
      ...prev,
      country_code: code,
      phone_number: number,
    }));
  };

  return (
    <>
      <SafeAreaView style={themeStyle.container}>
        <ViewBlock>
          <TextBlock label={'Sign Up '} />
        </ViewBlock>

        {/* Fields */}
        <ViewBlock style={themeStyle.fieldContainer}>
          <TextInput
            label="User Name"
            value={details.user_name}
            name="user_name"
            onChangeText={(value) => handleChange('user_name', value)}
            error={error?.user_name}
          />

          <TextInput
            label="Email"
            value={details.email}
            name="email"
            onChangeText={(value) => handleChange('email', value)}
            error={error?.email}
          />

          {/* Phone Input Component */}
          <PhoneInputComponent onPhoneChange={handlePhoneChange} />

          <PasswordText
            label="Password"
            value={details.password}
            name="password"
            onChangeText={(value) => handleChange('password', value)}
            error={error?.password}
          />
        </ViewBlock>

        {/* Navigation Button */}
        <TextBlock
          style={themeStyle?.forgotButton}
          label={'Go Back!'}
          onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaView>
    </>
  );
};

const themeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
  fieldContainer: {
    width: "70%",
    justifyContent: 'center',
  },
  forgotButton: {
    textDecorationLine: 'underline',
  },
});

export default signUp;
