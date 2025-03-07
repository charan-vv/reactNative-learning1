import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigation.replace('Login'); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/video/splash.mp4')} 
        style={styles.video}
        resizeMode="contain"
        onEnd={() => navigation.replace('Login')} 
        repeat={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default SplashScreen;
