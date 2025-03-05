import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {
  TextBlock,
  ViewBlock,
  Button,
  TextInput,
  PasswordText,
} from '../../../components';

const forgotPassword = ({route, navigation}) => {
  const {data} = route.params;
  const [details, setDetails] = useState({
    user_name: data?.user_name,
    password: '',
    conform_password: '',
  });
  const [error, setError] = useState({
    conform_password: '',
    password: '',
    user_name: '',
  });

  const handleChange = (name, value) => {
    if (
      name === 'conform_password' &&
      details?.password &&
      value === details?.password
    ) {
      setError(prev => ({
        ...prev,
        conform_password: '',
      }));
    } else {
      setError(prev => ({
        ...prev,
        conform_password: 'Password and confrom_pasword need to be same',
      }));
    }
    setDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <SafeAreaView style={themeStyle?.forgotContainer}>
        <ViewBlock>
          <TextBlock label={'Welcome to ForgotPassword Page'} />
        </ViewBlock>
        <TextInput
          label="User Name"
          value={details?.user_name}
          name="user_name"
          onChangeText={value => handleChange('user_name', value)}
        />
        <PasswordText
          label="Password"
          value={details?.password}
          name="password"
          onChangeText={value => handleChange('password', value)}
        />
        <PasswordText
          label="Conform Password"
          value={details?.conform_password}
          name="conform_password"
          onChangeText={value => handleChange('conform_password', value)}
        />

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
  forgotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  forgotButton: {
    textDecorationLine: 'underline',
  },
});
export default forgotPassword;
