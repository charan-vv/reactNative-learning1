// import React, {useEffect, useState} from 'react';
// import {Login, ForgotPassword, SignUp, TextToSpeech} from '../Screens';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen';
// import {Platform, View, ActivityIndicator} from 'react-native';

// const Stack = createStackNavigator();
// const options = {headerShown: false};

// const Layout = () => {

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       SplashScreen.hide();
//     }
//   }, []);

  

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Login"
//         screenOptions={{
//           headerShown: false,
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//         }}>
//         <Stack.Screen name="Login" component={Login} options={options} />
//         <Stack.Screen
//           name="ForgotPassword"
//           component={ForgotPassword}
//           options={options}
//         />
//         <Stack.Screen name="SignUp" component={SignUp} options={options} />
//         <Stack.Screen
//           name="TextToSpeech"
//           component={TextToSpeech}
//           options={options}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Layout;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../components/SplashScreen'; // Import the splash screen
import { Login, ForgotPassword, SignUp, TextToSpeech } from '../Screens';

const Stack = createStackNavigator();
const options = { headerShown: false };

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen" // Set SplashScreen as the first screen
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} options={options} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={options} />
        <Stack.Screen name="SignUp" component={SignUp} options={options} />
        <Stack.Screen name="TextToSpeech" component={TextToSpeech} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
