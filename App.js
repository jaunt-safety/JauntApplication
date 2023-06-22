
import SignInScreen from "./src/screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./src/screens/SignUpScreen/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import HelpScreen from "./src/screens/HelpScreen";
import UserScreen from "./src/screens/UserScreen/UserScreen";
import PhotoScreen from "./src/screens/UserScreen/PhotoScreen";
import FeedbackScreen from "./src/screens/FeedbackScreen/FeedbackScreen";
import DriverScreen from "./src/screens/DriverScreen";
import TrackScreen from "./src/screens/TrackScreen";
import Verification from "./src/screens/SignUpScreen/Verification";
import ForgotPassword from "./src/screens/SignUpScreen/ForgotPassword";
import MailIdScreen from "./src/screens/SignUpScreen/MailIdScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const screenOptions = { headerShown: false}
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen 
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          />
        <Stack.Screen
          name="PhotoScreen"
          component={PhotoScreen}
          />
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
        />
        <Stack.Screen
          name="DriverScreen"
          component={DriverScreen}
        />
        <Stack.Screen
          name="TrackScreen"
          component={TrackScreen}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
        />
        <Stack.Screen
          name="MailIdScreen"
          component={MailIdScreen}
        />
        <Stack.Screen
          name="ForgotScreen"
          component={ForgotPassword}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
