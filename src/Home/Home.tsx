import * as React from "react";
import Tabs from "./Screens/Tabs/tabs";
import ShoppingGrid from "./Screens/HomeComponents/ShoppingGrid";
import Catalog from "./Screens/SearchComponents/Catalog";
import CategoriesW from "./Screens/SearchComponents/CategoriesW";
import Grid from "./Screens/SearchComponents/Grid";
import CategoriesM from "./Screens/SearchComponents/CategoriesM";
import Search from "./Screens/Tabs/Search";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./../../components/navigation";
import store from "../Redux/store";
import { Provider } from "react-redux";

const AppStack = createStackNavigator<Routes>();
const Home = () => {
  return (
    <Provider store={store}>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Tabs" component={Tabs} />
        <AppStack.Screen name="Search" component={Search} />
        <AppStack.Screen name="ShoppingGrid" component={ShoppingGrid} />
        <AppStack.Screen name="CategoriesW" component={CategoriesW} />
        <AppStack.Screen name="CategoriesM" component={CategoriesM} />
        <AppStack.Screen name="Grid" component={Grid} />
        <AppStack.Screen name="Catalog" component={Catalog} />
      </AppStack.Navigator>
    </Provider>
  );
};

export default Home;
