import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Button = (label) => {
  return (
    <Pressable style={styles.btn} >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 330,
    // backgroundColor: "#c39476",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
