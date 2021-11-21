import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { Routes, StackNavigationProps } from '../src/Authentication/Navigation/navigation';


const Button = ( label, onPress) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 240,
    backgroundColor: "#2c393f",
    justifyContent: "center",
    alignItems: "center",
    bottom: 60,
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
  },
  label: {
    fontSize: 15,
    textAlign: "center",
    color: "#c6ced1",
  },
});
