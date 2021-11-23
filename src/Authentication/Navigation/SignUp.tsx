import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Routes, StackNavigationProps } from './navigation';



const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 64 }}>SignUp</Text>
      <Pressable
        style={{
          bottom: 0,
          height: 50,
          width: "100%",
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

export default SignUp;

const styles = StyleSheet.create({
  container: {}
});
