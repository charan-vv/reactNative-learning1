import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ThemePasswordInput = ({
  label,
  error,
  placeholder,
  onChangeText,
  value,
  name,
}) => {
  const [secureText, setSecureText] = useState(true);
  const theme = useColorScheme();

  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text style={[styles.label, theme === 'dark' && styles.darkLabel]}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.passwordContainer,
          theme === 'dark' && styles.darkPasswordContainer,
        ]}>
        <TextInput
          style={[
            styles.input,
            theme === 'dark' && styles.darkInput,
            {flex: 1},
          ]}
          placeholder={placeholder}
          placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
          secureTextEntry={secureText} // Toggle visibility
          value={value}
          onChangeText={text => onChangeText(text, name)}
          accessible={true} // Improves accessibility
        />

        {/* Eye icon button */}
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={styles.iconContainer}>
          <Ionicons
            name={secureText ? 'eye-off' : 'eye'}
            size={22}
            color={theme === 'dark' ? '#fff' : '#000'}
          />
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  darkLabel: {
    color: '#fff',
  },
  input: {
    height: 40,
    color: '#000',
    backgroundColor: '#fff',
  },
  darkInput: {
    borderColor: '#555',
    color: '#fff',
    backgroundColor: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    // paddingHorizontal: 10,
  },
  darkPasswordContainer: {
    borderColor: '#555',
    backgroundColor: '#333',
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

export default ThemePasswordInput;
