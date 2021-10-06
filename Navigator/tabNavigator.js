import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen';
import Message from '../Screens/Message';

const Tab = createBottomTabNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          activeTintColor: '#5312A1',
          inactiveTintColor: '#222222',
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
