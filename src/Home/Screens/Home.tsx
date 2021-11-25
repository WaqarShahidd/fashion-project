import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Tabs  from "./Tabs/tabs";
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

interface HomeProps {}
const Stack = createStackNavigator();
const Home = () => {
  return (
    <View>
      <Tabs />
    </View>
    // <Stack.Navigator>
    // </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
