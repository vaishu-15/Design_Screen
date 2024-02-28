import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack, MainStack} from './src/routes/Navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="AuthStack"
          component={AuthStack}
        />
        <Stack.Screen
          name="MainStack"
          options={{headerShown: false}}
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
