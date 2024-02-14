import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import Feed from './src/screen/Feed';
import Content from './src/screen/Content';
import Market from './src/screen/Market';
import Profile from './src/screen/Profile';
import UserOpt from './src/screen/UserOpt';
import ResponsiveSize from './src/utils/responsivesSize';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUp}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
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
        tabBarStyle: {
          backgroundColor: '#FAFAFA',
          height: ResponsiveSize(83),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <View
              style={{
                width: ResponsiveSize(32),
                height: ResponsiveSize(32),
                borderRadius: 100,
                backgroundColor: focused ? '#5DB075' : '#E8E8E8'
              }}></View>
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <View
              style={{
                width: ResponsiveSize(32),
                height: ResponsiveSize(32),
                borderRadius: 100,
                backgroundColor: focused ? '#5DB075' : '#E8E8E8'
              }}></View>
          ),
        }}
        name="Content"
        component={Content}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <View
              style={{
                width: ResponsiveSize(32),
                height: ResponsiveSize(32),
                borderRadius: 100,
                backgroundColor: focused ? '#5DB075' : '#E8E8E8'
              }}></View>
          ),
        }}
        name="Market"
        component={Market}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <View
              style={{
                width: ResponsiveSize(32),
                height: ResponsiveSize(32),
                borderRadius: 100,
                backgroundColor: focused ? '#5DB075' : '#E8E8E8'
              }}></View>
          ),
        }}
        name="UserOpt"
        component={UserOpt}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <View
              style={{
                width: ResponsiveSize(32),
                height: ResponsiveSize(32),
                borderRadius: 100,
                backgroundColor: focused ? '#5DB075' : '#E8E8E8'
              }}></View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
 

  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="auth"
          component={AuthStack}
        /> */}
        <Stack.Screen
          name="main"
          options={{headerShown: false}}
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;