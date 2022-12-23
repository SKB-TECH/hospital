import {View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      activeColor="#fff"
      barStyle={{backgroundColor: 'blue'}}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Feed_home"
        component={Home}
        options={{
          tabBarLabel: 'Dashbord',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          //tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="tabs_home"
        component={Home}
        options={{
          tabBarLabel: 'Parametres',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
