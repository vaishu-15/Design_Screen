import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import Feed from './src/screen/Feed';
import Content from './src/screen/Content';
import Market from './src/screen/Market';
import UserOptions from './src/screen/UserOptions';
import ResponsiveSize from './src/utils/responsivesSize';
import Expenses from './src/screen/Expenses';

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
          backgroundColor: '#FAFAFA',
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
        name="expenses"
        component={Expenses}
      />
      <Tab.Screen
        options={({focused}) => ({
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbar(focused)}></View>
          ),
        })}
        name="userOptions"
        component={UserOptions}
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="auth"
          component={AuthStack}
        />
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
