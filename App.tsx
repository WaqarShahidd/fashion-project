import * as React from "react";
import Onboarding from "./src/Authentication/Navigation/Onboarding";
import Welcome from "./src/Authentication/Navigation/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/Authentication/Navigation/navigation";

const Stack= createStackNavigator<Routes>();
const Navigator = () => {
 return (
   <Stack.Navigator screenOptions={{headerShown: false}} >
     <Stack.Screen name="Onboarding" component={Onboarding} />
     <Stack.Screen name="Welcome" component={Welcome} />
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
