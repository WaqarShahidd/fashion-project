import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Picker } from "@react-native-picker/picker";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaProvider style={styles.container}>
      
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textStyle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
