import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Feed from '../screen/Feed';
import Content from '../screen/Content';
import Market from '../screen/Market';
import Profile from '../screen/Profile';
import ResponsiveSize from '../utils/responsivesSize';
import Expenses from '../screen/Expenses';
import { COLORS } from '../utils/constants';
import UserOptions from '../screen/UserOptions';
import Messages from '../screen/Messages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUp}
      />
      <Stack.Screen
        name="UserOptions"
        options={{headerShown: false}}
        component={UserOptions}
      />
      <Stack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
      <Stack.Screen
        name="Messages"
        options={{headerShown: false}}
        component={Messages}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: ResponsiveSize(83),
          paddingBottom: ResponsiveSize(20),
        },
      }}>
      <Tab.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbar(focused)}></View>
          ),
        })}
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbar(focused)}></View>
          ),
        })}
        name="Content"
        component={Content}
      />
      <Tab.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbar(focused)}></View>
          ),
        })}
        name="Market"
        component={Market}
      />
      <Tab.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbar(focused)}></View>
          ),
        })}
        name="Expenses"
        component={Expenses}
      />
      <Tab.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbar(focused)}></View>
          ),
        })}
        name="Profile"
        component={Profile}
      />
     
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabbar: focused => ({
    width: ResponsiveSize(32),
    height: ResponsiveSize(32),
    borderRadius: 200,
    backgroundColor: focused ? '#5DB075' : '#E8E8E8',
  }),
});

export {AuthStack, MainStack};
