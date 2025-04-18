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


  //preso da internet
  const bottoni = (value) => (
    <TouchableOpacity style={styles.button} onPress={() => premuto(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return(
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display || '0'}</Text>
      </View>

      <View style={styles.row}>
        {bottoni("C")}
        {bottoni("/")}
        {bottoni("*")}
        {bottoni("-")}
      </View>
      <View style={styles.row}>
        {bottoni("7")}
        {bottoni("8")}
        {bottoni("9")}
        {bottoni("+")}
      </View>
      <View style={styles.row}>
        {bottoni("4")}
        {bottoni("5")}
        {bottoni("6")}
        {bottoni("=")}
      </View>
      <View style={styles.row}>
        {bottoni("1")}
        {bottoni("2")}
        {bottoni("3")}
        {bottoni("0")}
      </View>
      <View style={styles.row}>
        {bottoni(".")}
        {bottoni("M+")}
        {bottoni("M-")}
        {bottoni("RM")}
      </View>
      <statusbar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  displayContainer: {
    backgroundColor: "#f5f5f",
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  displayText:{
    fontSize: 20,
    color: "#000",
  },
  
});
