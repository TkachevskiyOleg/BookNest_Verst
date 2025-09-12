import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import VerificationScreen from './screens/VerificationScreen';
import HomeScreen from './screens/HomeScreen';
import ReadNextScreen from './screens/Read_next';
import CustomDrawerContent from './screens/HomeScreen/DrawerContent';
import CategoryScreen from './screens/CategoryScreen';
import LanguageScreen from './screens/CategoryScreen/LanguageScreen';
import PublisherScreen from './screens/CategoryScreen/PublisherScreen';
import SortScreen from './screens/CategoryScreen/SortScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="ReadNext" component={ReadNextScreen}/>
      <Stack.Screen name="Category" component={CategoryScreen}/>
      <Stack.Screen name="FilterLanguage" component={LanguageScreen}/>
      <Stack.Screen name="FilterPublisher" component={PublisherScreen}/>
      <Stack.Screen name="Sort" component={SortScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Main">
          {() => (
            <Drawer.Navigator
              screenOptions={{ headerShown: false }}
              drawerContent={props => <CustomDrawerContent {...props} />}
              initialRouteName="Home"
            >
              <Drawer.Screen name="Home" component={MainStack} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}