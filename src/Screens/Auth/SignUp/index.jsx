import React, { useState } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ViewBlock, TextBlock,TextInput} from '../../../components';

const signUp = ({navigation}) => {
  const [details,setDetails]=useState({
    user_name:"",
    email:"",
    phone_number:"",
    password:"",
    
  })
  return (
    <>
      <SafeAreaView style={themeStyle.container}>
        <ViewBlock>
          <TextBlock label={'Sign Up '} />

        </ViewBlock>
        {/* Fields */}
        <ViewBlock style={themeStyle.fieldContainer}>
          <TextInput
          label={""}
          />
        </ViewBlock>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldContainer:{

  },
  forgotButton: {
    textDecorationLine: 'underline',
  },
});
export default signUp;
