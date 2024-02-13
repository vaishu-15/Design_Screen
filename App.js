import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screen/Login';

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
      {/* <Stack.Screen name='SignUp' component={SignUp}/> */}
    </Stack.Navigator>
  );
};

// const MainStack=()=>{
//   <Tab.Navigator>
//         {/* <Tab.Screen name='Feed' component={Feed}/>
//         <Tab.Screen name='Content' component={Content}/>
//         <Tab.Screen name='Market' component={Market}/>
//         <Tab.Screen name='Expenses' component={Expenses}/>
//         <Tab.Screen name='Profile' component={Profile}/> */}
//   </Tab.Navigator>
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="auth"
          component={AuthStack}
        />
        {/* <Stack.Screen name='main' component={MainStack}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
