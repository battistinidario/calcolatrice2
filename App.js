import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function app(){
  const [display, setDisplay]= useState('');
  const pigiato= (value)=> {
    if (value === 'Canc'){
      setDisplay('');
    }else if(value==='='){
      try{
        const risultao= eval(display);
        setDisplay(result.toString())
      }catch{
        setDisplay('errore');
      }
    }else{
      setDisplay(display+value);
    }
  }
}

//preso da internet
const bottoni = (value) => (
  <TouchableOpacity style={styles.button} onPress={() => premuto(value)}>
    <Text style={styles.buttonText}>{value}</Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ciao sono</Text>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
