import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import Layouts from './src/layouts';



const App = () => {

  useEffect(()=>{
    LogBox.ignoreAllLogs(); 
  },[])
  
  return <Layouts />;
};

export default App;
