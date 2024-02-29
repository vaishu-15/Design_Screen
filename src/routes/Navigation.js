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
import PostPage from '../screen/PostPage';
import Photos from '../screen/Photos';
import Images from '../screen/Images';
import Insights from '../screen/Insights';
import InputField from '../common/InputField';
import Calender from '../screen/Calender';

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
      <Stack.Screen
        name="Content"
        options={{headerShown: false}}
        component={Content}
      />
      <Stack.Screen
        name="PostPage"
        options={{headerShown: false}}
        component={PostPage}
      />
      <Stack.Screen
        name="Market"
        options={{headerShown: false}}
        component={Market}
      />
      <Stack.Screen
        name="Photos"
        options={{headerShown: false}}
        component={Photos}
      />
      <Stack.Screen
        name="Images"
        options={{headerShown: false}}
        component={Images}
      />
      <Stack.Screen
        name="Insights"
        options={{headerShown: false}}
        component={Insights}
      />
      <Stack.Screen
        name="InputField"
        options={{headerShown: false}}
        component={InputField}
      />
      <Stack.Screen
        name="Calender"
        options={{headerShown: false}}
        component={Calender}
      />
      <Stack.Screen
        name="Expenses"
        options={{headerShown: false}}
        component={Expenses}
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
