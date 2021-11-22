import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Routes, StackNavigationProps } from "./navigation";

interface LoginProps {}

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 64 }}>Login</Text>
      <Pressable
        style={{
        bottom:0,
          height: 50,
          width: '100%',
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {}
});
