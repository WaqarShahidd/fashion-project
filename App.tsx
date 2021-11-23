import * as React from "react";
import Onboarding from "./src/Authentication/Navigation/Onboarding";
import Welcome from "./src/Authentication/Navigation/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/Authentication/Navigation/navigation";
import Login from "./src/Authentication/Navigation/Login";
import SignUp from "./src/Authentication/Navigation/SignUp";
import ResetPassword from "./src/Authentication/Navigation/ResetPassword";

const Stack= createStackNavigator<Routes>();
const Navigator = () => {
 return (
   <Stack.Navigator screenOptions={{headerShown: false}} >
     <Stack.Screen name="Onboarding" component={Onboarding} />
     <Stack.Screen name="Welcome" component={Welcome} />
     <Stack.Screen name="SignUp" component={SignUp} />
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="ResetPassword" component={ResetPassword} />
   </Stack.Navigator>
 ); 
}
export default function App() {
  return( 
    <NavigationContainer>
        <Navigator />
    </NavigationContainer>
    )
}
