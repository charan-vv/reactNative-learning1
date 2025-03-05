import React, {useEffect} from 'react';

import {Login, ForgotPassword, SignUp, TextToSpeech} from '../Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

const Stack = createStackNavigator();
const options = {headerShown: false};

const Layout = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name="Login" component={Login} options={options} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={options}
        />
        <Stack.Screen name="SignUp" component={SignUp} options={options} />
        <Stack.Screen
          name="TextToSpeech"
          component={TextToSpeech}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
