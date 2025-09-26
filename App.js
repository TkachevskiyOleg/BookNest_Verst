import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import VerificationScreen from './screens/VerificationScreen';
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import ReadNextScreen from './screens/Read_next';
import TrashScreen from './screens/TrashScreen';
import ReadingScreen from './screens/ReadingScreen'; 
import CustomDrawerContent from './screens/HomeScreen/DrawerContent';
import CategoryScreen from './screens/CategoryScreen';
import LanguageScreen from './screens/CategoryScreen/LanguageScreen';
import PublisherScreen from './screens/CategoryScreen/PublisherScreen';
import SortScreen from './screens/CategoryScreen/SortScreen';
import CollectionsScreen from './screens/CollectionsScreen';
import CollectionAudio from './screens/CollectionsScreen/AudioBooks';
import CollectionSaved from './screens/CollectionsScreen/Saved';
import CollectionDownloaded from './screens/CollectionsScreen/Downloaded';
import CollectionPostponed from './screens/CollectionsScreen/Postponed';
import SettingsScreen from './screens/SettingsScreen';
import SettingsLanguage from './screens/SettingsScreen/Language';
import SettingsChangePassword from './screens/SettingsScreen/ChangePassword';
import SettingsDevices from './screens/SettingsScreen/Devices';
import SettingsForgotPassword from './screens/SettingsScreen/EmailConfirm';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60 + (insets?.bottom || 0),
          paddingTop: 8,
          paddingBottom: Math.max(insets?.bottom || 0, 8),
        },
        tabBarActiveTintColor: '#2E8B57',
        tabBarInactiveTintColor: '#666',
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Головна',
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Бібліотека',
        }}
      />
      <Tab.Screen
        name="ImportTab"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="download-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Імпорт',
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="ProfileTab"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Профіль',
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="PremiumTab"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="diamond-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Преміум',
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
          },
        })}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Collections" component={CollectionsScreen}/>
      <Stack.Screen name="ReadNext" component={ReadNextScreen}/>
      <Stack.Screen name="Trash" component={TrashScreen}/>
      <Stack.Screen name="Reading" component={ReadingScreen}/> 
      <Stack.Screen name="Category" component={CategoryScreen}/>
      <Stack.Screen name="FilterLanguage" component={LanguageScreen}/>
      <Stack.Screen name="FilterPublisher" component={PublisherScreen}/>
      <Stack.Screen name="Sort" component={SortScreen}/>
      <Stack.Screen name="CollectionAudio" component={CollectionAudio}/>
      <Stack.Screen name="CollectionSaved" component={CollectionSaved}/>
      <Stack.Screen name="CollectionDownloaded" component={CollectionDownloaded}/>
      <Stack.Screen name="CollectionPostponed" component={CollectionPostponed}/>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
      <Stack.Screen name="SettingsLanguage" component={SettingsLanguage}/>
      <Stack.Screen name="SettingsChangePassword" component={SettingsChangePassword}/>
      <Stack.Screen name="SettingsDevices" component={SettingsDevices}/>
      <Stack.Screen name="SettingsForgotPassword" component={SettingsForgotPassword}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} edges={['top', 'left', 'right']}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="Main">
              {() => (
                <Drawer.Navigator
                  screenOptions={{ headerShown: false }}
                  drawerContent={props => <CustomDrawerContent {...props} />}
                >
                  <Drawer.Screen name="Home" component={MainStack} />
                </Drawer.Navigator>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}