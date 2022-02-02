import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./components/navigation";
import Onboarding from "./src/Start/Screens/Onboarding";
import Welcome from "./src/Start/Screens/Welcome";
import Login from "./src/Start/Screens/Login";
import SignUp from "./src/Start/Screens/SignUp";
import ResetPassword from "./src/Start/Screens/ResetPassword";
import Home from "./src/Home/Home";
import store from "./src/Redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator<Routes>();

const Navigator = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </Provider>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
