import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {ViewBlock, TextBlock, SpeechComponent} from '../../../components';

const signUp = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <>
      <SafeAreaView style={themeStyle.container}>
        <ViewBlock>
          <TextInput
            style={themeStyle.textArea}
            placeholder="Enter text to speak....."
            value={text}
            onChangeText={setText}
            multiline={true}
            numberOfLines={5}
          />
          <SpeechComponent text={text} />
        </ViewBlock>

        <ViewBlock style={themeStyle.backContainer}>
          <TextBlock
            style={themeStyle?.forgotButton}
            label={'Go Back!'}
            onPress={() => navigation.navigate('Login')}
          />
        </ViewBlock>
      </SafeAreaView>
    </>
  );
};
const themeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  textArea: {
    width: '100%',
    height: 200, // Increased height for textarea
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlignVertical: 'top', // Align text to the top in a multiline input
    marginBottom: 20,
  },
  backContainer:{
    flexDirection: 'row',
    width: '30%',
    alignSelf: 'flex-end', 
    marginBottom: 10, 
    gap:20
  },
  forgotButton: {
    textDecorationLine: 'underline',
  },
});
export default signUp;
