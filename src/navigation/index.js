import React from "react";
import {View,Text} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPassword from "../screens/ForgotPassword";


const Stack = createStackNavigator();
const screenOptions = { headerShown: false}

const Navigation = () =>{
    console.log(Stack)
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "SignIn">
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignupScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;