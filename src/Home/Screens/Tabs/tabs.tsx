import * as React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Cart from "./Cart";
import Search from "./Search";
import Profile from "./Profile";
import Wishlist from "./Wishlist";
import { Feather as Icon } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <SafeAreaProvider>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          bottom: Platform.OS === "android" ? -800 : 15,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Icon
                name="home"
                color={focused ? "#727272" : "#000"}
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search"
              color={focused ? "#727272" : "#000"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-bag"
              color={focused ? "#727272" : "#000"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="heart" color={focused ? "#727272" : "#000"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" color={focused ? "#727272" : "#000"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
  },
});
