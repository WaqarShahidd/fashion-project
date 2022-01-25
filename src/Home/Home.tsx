import * as React from "react";
import Tabs from "./Screens/Tabs/tabs";
import ShoppingGrid from "./Screens/SearchComponents/ShoppingGrid";
import Catalog from "./Screens/SearchComponents/Catalog";
import CategoriesW from "./Screens/SearchComponents/CategoriesW";
import CategoriesM from "./Screens/SearchComponents/CategoriesM";
import Search from "./Screens/Tabs/Search";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./../../components/navigation";
import SearchW from "../Home/Screens/SearchComponents/SearchW";

const AppStack = createStackNavigator<Routes>();
const Home = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Tabs" component={Tabs} />
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="ShoppingGrid" component={ShoppingGrid} />
      <AppStack.Screen name="CategoriesW" component={CategoriesW} />
      <AppStack.Screen name="CategoriesM" component={CategoriesM} />
      <AppStack.Screen name="Catalog" component={Catalog} />
      <AppStack.Screen name="SearchW" component={SearchW} />
    </AppStack.Navigator>
  );
};

export default Home;
