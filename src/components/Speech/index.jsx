import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Tts from 'react-native-tts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const speechComponent = ({ text, rate }) => {
  useEffect(() => {
    Tts.setDefaultRate( 0.5); 
  }, [rate]);

  const speak = () => {
    if (text.trim()) {
      Tts.speak(text);
    } else {
      Tts.speak('Please enter some text');
    }
  };

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={speak}>
      <Ionicons name="mic-circle" size={50} color="#007AFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    // flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop: 10,
  },
});

export default speechComponent;
