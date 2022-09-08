import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './page/Login';
import Register from './page/Register';
import Profile from './page/Profile';
import Repast from './page/Repast';
import Program from './page/Program';
import ProgramEdit from './page/ProgramEdit';

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

const RepastStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RepastPage"
        component={Repast}
        options={{
          headerTitle: 'DiyetProject',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ProgramPage"
        component={Program}
        options={{
          headerTitle: 'Öğün',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ProgramEditPage"
        component={ProgramEdit}
        options={{
          presentation: 'formSheet',
          headerTitle: 'Öğün Düzenle',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const InnerTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RepastScreen"
        component={RepastStack}
        options={{
          headerShown: false,
          title: "Diyet",
          tabBarIcon: () => { return <Icon name='clipboard-list-outline' size={30} />}
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={Profile}
        options={{
          headerTitle: "@" + auth().currentUser.email.split("@")[0],
          headerTitleAlign: "left",
          title: "Profil",
          tabBarIcon: () => { return <Icon name='account-group' size={30} />}
        }}
      />
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
