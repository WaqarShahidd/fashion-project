import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Tabs  from "./Tabs/tabs";
import { createStackNavigator } from "@react-navigation/stack";

interface HomeProps {}
const AppStack = createStackNavigator();
const Home = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Tabs" component={Tabs} />
    </AppStack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
