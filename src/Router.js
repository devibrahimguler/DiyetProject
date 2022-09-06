import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

import Login from './page/Login';
import Register from './page/Register';
import Profile from './page/Profile';
import Repast from './page/Repast';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const EntryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
};

const InnerTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="RepastPage" component={Repast} />
      <Tab.Screen name="ProfilePage" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={!auth().currentUser ? 'EntryScreen' : 'InnerScreen'}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="EntryScreen"
          component={EntryStack}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="InnerScreen"
          component={InnerTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
