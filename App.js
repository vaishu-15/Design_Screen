import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
}

const MainStack=()=>{
  return(
  <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarStyle: { position: 'absolute',
            padding:ResponsiveSize(83),
          backgroundColor:'#FAFAFA' },
  }}>
        <Tab.Screen name='Feed' component={Feed}/>
        <Tab.Screen name='Content' component={Content}/>
        <Tab.Screen name='Market' component={Market}/>
        <Tab.Screen name='UserOpt' component={UserOpt}/>
        <Tab.Screen name='Profile' component={Profile}/>
  </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="auth"
          component={AuthStack}
        />
        {/* <Stack.Screen  name='main' options={{headerShown: false}} component={MainStack}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
