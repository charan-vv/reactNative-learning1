import React, {useState} from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import {
  TextBlock,
  ViewBlock,
  Button,
  TextInput,
  PasswordText,
} from '../../../components';

const Login = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [details, setDetails] = useState({
    user_name: '',
    password: '',
    role: 'user',
  });
    const [error,setError]=useState({
      user_name:"",
      password:"",
    })

  const handleCountOn = () => setCount(count + 1);
  const handleCountOff = () => setCount(count - 1);
  const handleLogin = () => {
    if (details?.user_name && details?.password) {
      const payload = {
        user: details?.user_name,
        password: details?.password, 
        role: 'user',
      };
      setError((prev) => ({
        ...prev,
        user_name:"",
        password:"",
      }));

    } else {
      setError((prev) => ({
        ...prev,
        user_name: details?.user_name ? '' : 'Enter your name',
        password: details?.password ? '' : 'Enter your password', 
      }));
    }
  };

  const handleChange = (name, value) => {
    setDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ViewBlock style={styles.headerContainer}>
        <TextBlock label="I came to React Native" style={styles.title} />
        <TextBlock label="But still Struggling" style={styles.subtitle} />
      </ViewBlock>
      <TextBlock style={styles?.forgotButton} label={"Text To Speech!"} onPress={() => navigation.navigate('TextToSpeech')}/>
      <ViewBlock style={styles.countContainer}>
        <TextBlock label={count.toString()} style={styles.countText} />
      </ViewBlock>

      <ViewBlock style={styles.buttonContainer}>
        <Button title="Decrease" onPress={handleCountOff} style={styles.decreaseButton} />
        <Button title="Increase" onPress={handleCountOn} style={styles.increaseButton} />
      </ViewBlock>

      <TextInput
        label="User Name"
        value={details.user_name}
        name="user_name"
        onChangeText={(value) => handleChange('user_name', value)}
        error={error?.user_name}
      />
      <PasswordText
        label="Password"
        value={details.password}
        name="password"
        onChangeText={(value) => handleChange('password', value)}
        error={error?.password}
      />
      <ViewBlock style={styles?.forgotContainer}>
      <TextBlock style={styles?.forgotButton} label={"SignUp!"} onPress={() => navigation.navigate('SignUp')}/>
      <TextBlock style={styles?.forgotButton} label={"Forget Password?"} onPress={() => navigation.navigate('ForgotPassword',{data:details})}/>
      </ViewBlock>
      <Button title="Login" onPress={()=>{
        handleLogin()
      }} style={styles.loginButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  countContainer: {
    marginBottom: 20,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
    gap:15
  },
  decreaseButton: {
    backgroundColor: 'red',
  },
  loginButton:{
    backgroundColor:'green'
  },
  increaseButton: {
   
    backgroundColor: 'blue',
  },
  forgotContainer: {
    flexDirection: 'row',
    width: '70%',
    alignSelf: 'flex-end', 
    marginBottom: 10, 
    gap:20
  },
  forgotButton: {
   
    textDecorationLine: 'underline', 
  },
});

export default Login;
