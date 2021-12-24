import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Tabs  from "./Screens/Tabs/tabs";
import SearchM from './Screens/SearchComponents/SearchM';
import SearchW from './Screens/SearchComponents/SearchW';
import CategoriesW from './Screens/SearchComponents/CategoriesW';
import CategoriesM from './Screens/SearchComponents/CategoriesM';
import Search from './Screens/Tabs/Search';
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./../../components/navigation";

const AppStack = createStackNavigator<Routes>();
const Home = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Tabs" component={Tabs} />
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="SearchM" component={SearchM} />
      <AppStack.Screen name="SearchW" component={SearchW} />
      <AppStack.Screen name="CategoriesW" component={CategoriesW} />
      <AppStack.Screen name="CategoriesM" component={CategoriesM} />
    </AppStack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
