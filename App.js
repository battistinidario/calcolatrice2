import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState('');
  const [memoria, setMemoria] = useState(0);

  const pigiato = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        const risultato = eval(display);
        setDisplay(risultato.toString());
      } catch (error) {
        setDisplay('Erorr');
      }
    } else if (value === 'M+') {
      try {
        const valore = eval(display);
        setMemoria(memoria + valore);
      } catch {
        setDisplay('Erorr');
      }
    } else if (value === 'M-') {
      try {
        const valore = eval(display);
        setMemoria(memoria - valore);
      } catch {
        setDisplay('Erorr');
      }
    } else if (value === 'RM') {
      setDisplay(memoria.toString());
    } else {
      setDisplay(display + value);
    }
  };

  const bottoni = (value) => (
    <TouchableOpacity style={styles.button} onPress={() => pigiato(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display || '0'}</Text>
        <Text style={styles.memoryText}>Memoria: {memoria}</Text>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  displayContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  displayText: {
    fontSize: 28,
    color: '#000',
  },
  memoryText: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 5,
    minWidth: 70,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});
